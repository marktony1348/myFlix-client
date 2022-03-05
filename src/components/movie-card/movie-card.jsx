import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

// react bootstrap ui
import { Card, Button } from 'react-bootstrap';

import './movie-card.scss';

export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={""} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Button  onClick={() => onMovieClick(movie)} variant="secondary">Open</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Imagepath: PropTypes.string.isRequired,
      Genre: PropTypes.string.isRequired,
      Director: PropTypes.string.isRequired
      
      // Director: PropTypes.shape({
      //   Name: PropTypes.string.isRequired,
      //   Bio: PropTypes.string.isRequired,
      //   Birth: PropTypes.date,
      //   Death: PropTypes.date
      // }),

      }).isRequired,
    
      onMovieClick: PropTypes.func.isRequired
};