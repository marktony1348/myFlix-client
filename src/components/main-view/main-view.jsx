import React from 'react';
import axios from 'axios';


// react bootstrap ui with universal container
import { Container, Row, Col } from 'react-bootstrap';

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

    componentDidMount(){
        axios.get('https://marcotony-13489.herokuapp.com/movies')
          .then(response => {
            this.setState({
              movies: response.data
            });
          })
          .catch(error => {
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

    /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { user, register, movies, selectedMovie } = this.state;

        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;

        if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)} />);


        if (movies.length === 0) return <div className="main-view"/>;

        return (
            <Row className="main-view justify-content-md-center">
        
            {selectedMovie
                ? (
                    <Col md={7}>
                        <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    </Col>
                )
                : movies.map(movie => (
                    <Col md={3}>
                        <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                    </Col>
                ))
            }
        </Row>
            
        );
    }

}