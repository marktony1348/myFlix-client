import React from "react";
import axios from "axios";

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


// #0
import { setMovies } from '../../actions/actions';

// we haven't written this one yet
import MoviesList from '../movies-list/movies-list';

// react bootstrap ui with universal container
import { Container, Row, Col } from "react-bootstrap";
import { NavbarView } from "../navbar-view/navbar-view";

import "./main-view.scss";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";
import { ProfileView } from "../profile-view/profile-view";
import { GenreView } from "../genre-view/genre-view";
import { DirectorView } from "../director-view/director-view";

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      // state @ null
      // movies: [],
      // selectedMovie: null,
      user: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
      this.getMovies(accessToken);
    }
  }

  getMovies(token) {
    axios
      .get("https://marcotony-13489.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
      // Assign the result to the state
      this.props.setMovies(response.data);
       
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // setSelectedMovie(movie) {
  //     this.setState({
  //         selectedMovie: movie
  //     });
  // }
  onRegistration(register) {
    this.setState({
      register,
    });
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username,
    });

    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.setState({
      user: null,
    });
  }

  /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
  // onLoggedIn(user) {
  //     this.setState({
  //         user
  //     });
  // }

  render() {
    // #5 movies is extracted from this.props rather than from the this.state
    let { movies } = this.props;
    let { user } = this.state;

    // const { movies, user } = this.state;
    if (!user)
      return (
        <Row>
          <Col>
            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
          </Col>
        </Row>
      );
    // /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
    // // if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    // // if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)} />);
    // if (movies.length === 0) return <div className="main-view" />;

    // log out
    <button
      onClick={() => {
        this.onLoggedOut();
      }}
    >
      Logout
    </button>;

    return (
      <Router>
        {<NavbarView user={user} />}
        <Container>
          <Row className="main-view justify-content-md-center">
            {/* <Routes> */}

            <Route
              exact
              path="/"
              render={() => {
                if (!user) return;
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>;

                if (movies.length === 0) return <div className="main-view" />;

               // #6
              return <MoviesList movies={movies}/>;
              }}
            />

            <Route
              path="/register"
              render={() => {
                if (user) return <Redirect to="/" />;
                return (
                  <Col>
                    <RegistrationView />
                  </Col>
                );
              }}
            />

            <Route
              path="/movies/:movieId"
              render={({ match, history }) => {
                if (!user) return;
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>;

                if (movies.length === 0) return <div className="main-view" />;

                return (
                  <Col md={8}>
                    <MovieView
                      movie={movies.find((m) => m._id === match.params.movieId)}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path="/genres/:name"
              render={({ match, history }) => {
                if (!user)
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col md={8}>
                    <GenreView
                      genre={
                        movies.find((m) => m.Genre.Name === match.params.name)
                          .Genre
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path="/directors/:name"
              render={({ match, history }) => {
                if (!user) return;
                <Col>
                  <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                </Col>;

                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col md={8}>
                    <DirectorView
                      director={
                        movies.find(
                          (m) => m.Director.Name === match.params.name
                        ).Director
                      }
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />

            <Route
              path="/users/:username"
              render={({ match, history }) => {
                if (!user)
                  return (
                    <Col>
                      <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                    </Col>
                  );
                if (movies.length === 0) return <div className="main-view" />;
                return (
                  <Col md={8}>
                    <ProfileView
                      user={movies.find(
                        (m) => m.username === match.params.username
                      )}
                      onBackClick={() => history.goBack()}
                    />
                  </Col>
                );
              }}
            />
            {/* </Routes> */}
          </Row>
        </Container>
      </Router>
    );
  }
}

// #7
let mapStateToProps = state => {
  return { movies: state.movies }
}

// #8
export default connect(mapStateToProps, { setMovies } )(MainView);