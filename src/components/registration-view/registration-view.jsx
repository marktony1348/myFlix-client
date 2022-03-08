import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// react bootstrap ui
import { Form, Button, Container, Navbar, Nav, Card } from 'react-bootstrap';

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday] = useState('');

//   
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');
    const [ emailErr, setEmailErr ] = useState('');

    // validate user inputs
    const validate = () => {
        let isReq = true;

        if(!username){
            setUsernameErr('Username required');
            isReq = false;
        }else if(username.length < 2){
            setUsernameErr('Username must be at least 2 characters long');
            isReq = false;
        }
        if(!password){
            setPasswordErr('Password required');
            isReq = false;
        }else if(password.length < 6){
            setPassword('Password must be at least 6 characters long');
            isReq = false;
        }
        if(!email){
            setEmailErr('Email required');
            isReq = false;
        }else if(email.indexOf('@') === -1){
            setEmail('Email must be valid');
            isReq = false;
        }
        return isReq;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if(isReq) {
            /* Send request to the server for authentication */
            axios.post('https://orishflix.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday,
            })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Registration successful, please login!');
                    window.open('/', '_self');
                })
                .catch(response => {
                    console.error(response);
                    alert('Unable to register');
            });
        }
    };
  return (
    <div className="registration-view">
       {/* <Navbar expand="lg"  bg="#5a8aa0" className="MainNavbar">
          <Container>
            <Navbar.Brand href="#myflix">My Flix</Navbar.Brand>
            <Nav className="me-auto">
              
              <Nav.Link href="#logout">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}

        <Container fluid className= "RegForm">
            <Card>
              <Card.Body>
                <Card.Title> Please Register </Card.Title>
                <form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text"  value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                        {/* code for displaying the form validation error message */}
                        {usernameErr && <p>{usernameErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password(must be 8 characters or more)" />
                        {/* code for displaying the form validation error message */}
                        {passwordErr && <p>{passwordErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
                         {/* code for displaying the form validation error message */}
                         {emailErr && <p>{emailErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="updateBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="date" value={birthday}onChange={e => setBirthday(e.target.value)} placeholder="Enter Birthday" />
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

RegistrationView.propTypes = {
    register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
    }),
  onRegistration: PropTypes.func.isRequired,
};