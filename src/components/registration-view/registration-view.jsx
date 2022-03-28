import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom"

// react bootstrap ui
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './registration-view.scss';


export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ birthday, setBirthday] = useState('');

  // hooks
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');
  const [ emailErr, setEmailErr ] = useState('');
  const [ birthdayErr, setBirthdayErr ] = useState('');


  
  

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
      axios.post('https://marcotony-13489.herokuapp.com/users', {
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
        <Row className="mt-5">
              <Col md={12}>
                <Form>
                    <h3>Sign Up</h3>
                    <p></p>

                    <Form.Group controlId="formUsername" className= "reg-form-inputs">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                        {/* code for displaying the form validation error message */}
                        {usernameErr && <p>{usernameErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="formPassword" className= "reg-form-inputs">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                        {/* code for displaying the form validation error message */}
                        {passwordErr && <p>{passwordErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="formEmail" className= "reg-form-inputs">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="Email" value={email} onChange={e => setPassword(e.target.value)} placeholder="Enter Email" />
                        {/* code for displaying the form validation error message */}
                        {emailErr && <p>{emailErr}</p>}
                    </Form.Group>

                    <Form.Group controlId="updateBirthday">
                        <Form.Label>Birthday:</Form.Label>
                        <Form.Control type="Date" name="birthday" onChange={e => setPassword(e.target.value)} placeholder="Enter Birthday" />
                    </Form.Group> <br>
                    </br>
                    <Button variant="secondary" type="submit" onClick={handleSubmit}>Submit </Button>
                    <p></p>
                    <p>Already registered<link to={'/'}>sign in</link>here</p>
                </Form>
              </Col>
        </Row>

  );  
  
}
RegistrationView.propTypes = {
  register: PropTypes.shape({
      Username: PropTypes.string.isRequired,
      Password: PropTypes.string.isRequired,
      Email: PropTypes.string.isRequired,
      Birthday: PropTypes.string.isRequired,
  }),
onRegistration: PropTypes.func.isRequired,
};