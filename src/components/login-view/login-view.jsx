import React, { useState } from 'react';
import PropTypes from 'prop-types';

// react bootstrap ui
import { Form, Button, Container, Card, Navbar, Nav } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <div className="login-view">
          <Navbar expand="lg"  bg="#5a8aa0" className="MainNavbar">
          <Container>
          <Navbar.Brand href="#myflix">My Flix</Navbar.Brand>
              <Nav className="me-auto">
              
              <Nav.Link href="#logout">Logout</Nav.Link>
              </Nav>
          </Container>
          </Navbar>
    
          <Container fluid className="loginContainer" >   
            <Card>
                <Card.Body>
                    <Card.Title> Please Login </Card.Title>
                    <form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                        </Form.Group> <br>
                        </br>
                        <Button variant="secondary" type="submit" onClick={handleSubmit}>Submit </Button>
                    </form>
                </Card.Body>
            </Card>
          </Container>
            <div>
                <Navbar expand="xl" bg="#5a8aa0" className="loginNavbar">
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

LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onLoggedIn: PropTypes.func.isRequired,
};