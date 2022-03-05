import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

// react bootstrap ui
import { Form, Button, Container, Navbar, Nav, Card } from 'react-bootstrap';

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
    <div className="registration-view">
       <Navbar expand="lg"  bg="#5a8aa0" className="MainNavbar">
          <Container>
            <Navbar.Brand href="#myflix">My Flix</Navbar.Brand>
            <Nav className="me-auto">
              
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container fluid className= "RegForm">
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
                    </Form.Group> <br>
                    </br>
                    <Button variant="secondary" type="submit" onClick={handleSubmit}>Submit </Button>
                </form>
              </Card.Body>
            </Card>
        </Container>
        <div>
          <Navbar expand="xl" bg="#5a8aa0" className="RevNavbar">
            <Container>
              <Navbar.Brand >Copyright@2022</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="#"></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
            
        </div>
    </div>

  );  
  
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};