import React from 'react';
import PropTypes from 'prop-types';

import './movie-view.scss';

import { Link } from 'react-router-dom';
// react bootstrap ui
import { Container, Row, Col, Button } from 'react-bootstrap';

export class MovieView extends React.Component {

    keypressCallback(event) {
        console.log(event.key);
    }

    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.keypressCallback);
    }

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <div className="movie-view">
                            <div className="movie-poster"> <br>
                            </br>
                                <img src={"https://via.placeholder.com/250C/Ohttps://placeholder.com/"}/> 
                            </div> <br>
                            </br>
                            <div className="movie-title">
                                <span className="label">Title: </span>
                                <span className="value">{movie.Title}</span>
                            </div>
                            <div className="movie-description">
                                <span className="label">Description: </span>
                                <span className="value">{movie.Description}</span>
                            </div>
                            <div className="movie-genre">
                                <span className="label">Genre: </span>
                                <span className="value">{movie.Genre.Name}</span>
                                <Link to={`/genres/${movie.Genre.Name}`}>
                                    <Button variant="link">Genre</Button>
                                </Link>
                            </div>
                            <div className="movie-director">
                                <span className="label">Director: </span>
                                <span className="value">{movie.Director.Name}</span>
                                <Link to={`/directors/${movie.Director.Name}`}>
                                    <Button variant="link">Director</Button>
                                </Link>
                            </div>
                            

                            <Button variant="secondary" onClick={() => onBackClick(null)}>Back</Button>
                            

                        </div>          
                    </Col>
                </Row>

            </Container>
        );
    }
}

// MovieView.propTypes = {
//     movie: PropTypes.shape({
//         Title: PropTypes.string.isRequired,
//         Description: PropTypes.string.isRequired,
     
//         Genre: PropTypes.shape({
//             Name: PropTypes.string.isRequired,
//             Description: PropTypes.string.isRequired
//         }),
//         Director: PropTypes.shape({
//             Name: PropTypes.string.isRequired,
//             Bio: PropTypes.string.isRequired,
//             Birth: PropTypes.date,
//             Death: propTypes.date
//         }),
//         Actors: PropTypes.array,
//         Featured: PropTypes.bool,
//         ImagePath: PropTypes.string.isRequired
//     }).isRequired,

//     onMovieClick: PropTypes.func.isRequired

// };