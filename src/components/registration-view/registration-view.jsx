import React, { useState } from 'react';
import PropTypes from 'prop-types';

// react bootstrap ui
import { Form, Button, Container, Row, Col, Card, CardGroup } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ Birthday, setBirthday] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, Birthday);
    /* Send a request to the server for authentication */
    /* then call props on registored user(username) */
    props.onRegistration(username);
  };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title> Please Register </Card.Title>
                <form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="Email" onChange={e => setPassword(e.target.value)} placeholder="Enter Email" />
                    </Form.Group>

                    <Form.Group controlId="formBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="Date" onChange={e => setPassword(e.target.value)} placeholder="Enter Birthday" />
                    </Form.Group>

                    <Button variant="outline-dark" type="submit" onClick={handleSubmit}>Submit </Button>
                </form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};