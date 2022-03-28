import React from 'react';

import PropTypes from 'prop-types';
import './director-view.scss';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';

export class DirectorView extends React.Component {

    render() {
        const { movie, director, onBackClick } = this.props;

        return (
            <Container fluid>
                <Card>
                    <Card.Title>Director</Card.Title>
                    <div>
                        <span className="label">Name: </span>
                        <span className="value">{director.Name}</span>
                    </div>
                    <div>
                        <span className="label">Bio: </span>
                        <span className="value">{director.Bio}</span>
                    </div>
                    <div>
                        <span className="label">Birth: </span>
                        <span className="value">{director.Birth}</span>
                    </div>
                    <div>
                        <span className="label">Death: </span>
                        <span className="value">{director.Death}</span>
                    </div>

                    <div className="backButton">
                        <Button variant="secondary" onClick={() => { onBackClick(null); }}>Back</Button>
                    </div>
                </Card>
            </Container>
        );
    }
}

DirectorView.proptypes = {
    Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string,
        Birth: PropTypes.string,
        Death: PropTypes.string,
    }).isRequired,
};