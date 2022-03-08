import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Link } from 'react-router-dom';

// react bootstrap ui
import { Form, Button, Container, Card } from 'react-bootstrap';

import './login-view.scss';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    // form validation using hooks for inputs
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');

    // validate user inputs
const validate = () => {
    let isReq = true;
    if(!username){
     setUsernameErr('Username Required');
     isReq = false;
    }else if(username.length < 2){
     setUsernameErr('Username must be 2 characters long');
     isReq = false;
    }
    if(!password){
     setPasswordErr('Password Required');
     isReq = false;
    }else if(password.length < 6){
     setPassword('Password must be 6 characters long');
     isReq = false;
    }

    return isReq;
}

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
            /* Send a request to the server for authentication */
            axios.post('https://marcotony-13489.herokuapp.com/login', {
                Username: username,
                Password: password
            })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data);
            })
            .catch(e => {
                console.log('user not found')
            });
        }
       
    };

    return (
        <div className="login-view">
          {/* <Navbar expand="lg"  bg="#5a8aa0" className="MainNavbar">
          <Container>
          <Navbar.Brand href="/">My Flix</Navbar.Brand>
              <Nav className="me-auto">
              
              <Nav.Link href="#logout">Logout</Nav.Link>
              </Nav>
          </Container>
          </Navbar> */}
    
          <Container fluid className="loginContainer" >   
            <Card>
                <Card.Body>
                    <Card.Title> Please Login </Card.Title>
                    <form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                            {/* code for displaying the form validation error message */}
                            {usernameErr && <p>{usernameErr}</p>}
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                            {/* code for displaying the form validation error message */}
                            {passwordErr && <p>{passwordErr}</p>}
                        </Form.Group> <br>
                        </br>
                        <Button variant="secondary" type="submit" onClick={handleSubmit}>Submit </Button>
                    </form>
                </Card.Body>
            </Card>
          </Container>
           
                
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