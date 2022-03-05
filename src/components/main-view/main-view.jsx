import React from 'react';
import axios from 'axios';



// react bootstrap ui with universal container
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

import './main-view.scss';




import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';




export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {

            // state @ null
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    // componentDidMount(){
    //     axios.get('https://marcotony-13489.herokuapp.com/movies')
    //       .then(response => {
    //         this.setState({
    //           movies: response.data
    //         });
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    // }

    getMovies(token) {
        axios.get('https://marcotony-13489.herokuapp.com/movies', {
          headers: { Authorization: `Bearer ${token}`}
        })
        .then(response => {
          // Assign the result to the state
          this.setState({
            movies: response.data
          });
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    onRegistration(register) {
        this.setState({
            register,
        });
    }

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
          user: authData.user.Username
        });
      
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
      }

    /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
    // onLoggedIn(user) {
    //     this.setState({
    //         user
    //     });
    // }

    render() {
        const { user, register, movies, selectedMovie } = this.state;

        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)} />);


        if (movies.length === 0) return <div className="main-view"/>;

        return (
            <div className="main-view">
            <Navbar expand="lg" bg="#5a8aa0" className="MainNavbar">
            <Container>
            <Navbar.Brand >My Flix</Navbar.Brand>
                <a href="./components/marktony-svg logo.svg"></a>
                <Nav className="me-auto">
                <Nav.Link href="target_{login-view}">Logout</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
    
            <Row className="main-view justify-content-md-center">
            {selectedMovie
              ? (
                <Col md={8}>
                  <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                </Col>
              )
              : movies.map((movie) => (
                <Col md={3} key={movie._id}>
                  <MovieCard
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                      this.setSelectedMovie(newSelectedMovie);
                    }}
                  />
                </Col>
              ))        
            }
            </Row>
            <div>
              <Navbar expand="xl" bg="#5a8aa0" className="MainNavbar2">
              <Container>
                  <Navbar.Brand >Copyright@2022</Navbar.Brand>
                  <Nav className="me-auto">
                  <Nav.Link href="#"></Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
                
            </div>
          </div>
         
        );    
      }     

}