import React from 'react';
import PropTypes from 'prop-types';

// react bootstrap ui
import { Card, Button } from 'react-bootstrap';

import { Link } from "react-router-dom";

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={""} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      // Imagepath: PropTypes.string.isRequired,
      // Genre: PropTypes.string.isRequired,
      // Director: PropTypes.string.isRequired
      
      // Director: PropTypes.shape({
      //   Name: PropTypes.string.isRequired,
      //   Bio: PropTypes.string.isRequired,
      //   Birth: PropTypes.date,
      //   Death: PropTypes.date
      // }),

      }).isRequired,
    
      // onMovieClick: PropTypes.func.isRequired
};