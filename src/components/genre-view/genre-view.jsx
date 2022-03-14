import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import "./genre-view.scss";



export class GenreView extends React.Component {
    render() {
        const { Genre, onBackClick, movie } = this.props;
        console.log("nnn");

   return (
      <>
        <Row className="genre-view">
            <Col>
              <div className="genre-name">
                <span className="label">Name: </span>
                <span className="value">{movie.Genre.Name}</span>
              </div>
              <div className="genre-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Genre.Description}</span>
              </div>
              <Link to={`/`}>
                <Button className='returnButton' variant='dark'>Return</Button>
              </Link>
          </Col>
        </Row>

      </>        
   )

 }


}
GenreView.propTypes = {
    genre: PropTypes.shape({
        Name: PropTypes.string,
        Description: PropTypes.string
    }),
    onBackClick: PropTypes.func.isRequired
};