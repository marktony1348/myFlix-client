import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

// react bootstrap ui
import { Card, Button } from 'react-bootstrap';

import './movie-card.scss';

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeA9D122tf9anS8BrCrKvEMfPpPiFVzAFGiw&usqp=CAU"} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>

          <Link to={`/movies/${movie._id}`}>
            <Button variant="secondary">Open</Button>
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