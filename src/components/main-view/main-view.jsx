import React from 'react';
// for state based routing
import { BrowserRouter as Router,  Routes, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// navbar import
import { Navbar } from '../navbar/navbar';
import { Link } from 'react-router-dom';

// react bootstrap ui with universal container
import { Row, Col } from 'react-bootstrap';




import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { ProfileView } from '../profile-view/profile-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { RegistrationView } from '../registration-view/registration-view';




export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {

            // state @ null
            movies: [],
            // selectedMovie: null,
            user: null
        };
    }
   
    // updated to persisted authentification
    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
          this.setState({
            user: localStorage.getItem('user')
          });
          this.getMovies(accessToken);
        }
      }

    

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
      
    /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
          user: authData.user.Username
        });
      
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    // setSelectedMovie(movie) {
    //     this.setState({
    //         selectedMovie: movie
    //     });
    // }

    // onRegistration(register) {
    //     this.setState({
    //         register,
    //     });
    // }

    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
          user: null
        });
    }

   

    render() {
        const { movies, user } = this.state;

        if (!user) return <Row>
        <Col>
            <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
        </Col>
        </Row>
        if (movies.length === 0) return <div className='main-view' />;


        return (
            <Router>
                {/* <Navbar expand="lg" bg="#5a8aa0" className="MainNavbar">
                <Container>
                <Navbar.Brand >My Flix</Navbar.Brand>
                    <Nav className="me-auto">
                    <button variant="primary" onClick={() => { this.onLoggedOut() }}>Logout</button>
                    </Nav>
                </Container>
                </Navbar> */}

                  
                    <Row className="main-view justify-content-md-center">
                        <Route exact path="/" render={() => {
                            if (!user) return 
                                <Col>
                                  <LoginView  onLoggedIn={user => this.onLoggedIn(user)} />
                                </Col>

                            if (movies.length === 0) return <div className="main-view" />;

                            return movies.map(m => (
                            <Col md={3} key={m._id}>
                                <MovieCard movie={m} />
                            </Col>
                            ))
                        }} ></Route>

                        <Route path="/register" render={() => {
                                if (user) return <Redirect to="/" />
                                return <Col>
                                    <RegistrationView />
                                </Col>
                        }} />

                        <Route path="/movies/:movieId" render={({ match, history }) => {
                            if (!user) return 
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                                </Col>

                            if (movies.length === 0) return <div className="main-view" />;

                            return <Col md={8}>
                            <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />

                        <Route path="/genres/:name" render={({ match, history }) => {
                            if (!user) return <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8}>
                                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                            </Col>
                        }} /> 

                        <Route path="/directors/:name" render={({ match, history }) => {

                            if (!user ) return 
                                <Col>
                                    <LoginView onLoggedIn={ (user) => this.onLoggedIn(user) } />
                                </Col>
                                
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8}>
                                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />

                        <Route path="/users/:username" render={({ match, history }) => {
                            if (!user) return <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8}>
                                <ProfileView user={movies.find(m => m.username === match.params.username)} onBackClick={() => history.goBack()} />
                            </Col>
                        }} />
                    </Row>
                
                {/* <div>
                    <Navbar expand="xl" bg="#5a8aa0" className="MainNavbar2">
                        <Container>
                            <Navbar.Brand >Copyright@2022</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#"></Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar> 
                </div> */}
            </Router>
         
        );    
    }     

}