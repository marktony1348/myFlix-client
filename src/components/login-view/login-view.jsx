import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { NavbarView } from "../navbar-view/navbar-view";


import { Link } from "react-router-dom";
// react bootstrap ui
import { Form, Container, Col, Row, Button, Navbar, Card, CardGroup } from "react-bootstrap";
import './login-view.scss';
export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    // Declare hook for each input
    const [ usernameErr, setUsernameErr ] = useState('');
    const [ passwordErr, setPasswordErr ] = useState('');

    // user input validation
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
          /* Send request to the server for authentication */
          axios.post('https://marcotony-13489.herokuapp.com/login', {
              Username: username,
              Password: password
          })
          .then(response =>{
              const data = response.data;
              props.onLoggedIn(data);
          })
          .catch(e => {
            console.log('user not found')
          });
        }
      };
      return (
        
        <Container  className="login-view" align="center">
            <NavbarView />
            <Col>
              <CardGroup className= "loginf">
              <Card className="card">
                  <Card.Body>
                    <Card.Title className="text-center">Welcome to myFlixCinerverse!</Card.Title>
                     <Card.Subtitle className="mb-2 text-muted text-center">Please Login</Card.Subtitle>
                      
                <Form>
                <Form.Group className="mb-3 text-left"  controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" onChange={e => setUsername(e.target.value)} placeholder="Enter username" />
                  {/* code added here to display validation error */}
                  {usernameErr && <p>{usernameErr}</p>}
                </Form.Group>
  
                  <Form.Group className="mb-3 text-left" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"  onChange={e => setPassword(e.target.value)} placeholder="Password" />
                     {/* code added here to display validation error */}
                    {passwordErr && <p>{passwordErr}</p>}     
                  </Form.Group>
  
                  <div className="mt-3">
                  <Button variant="secondary" type="submit" onClick={handleSubmit}>Login</Button>
  
                      </div>
                      </Form>
                      </Card.Body>
                      </Card>
                      </CardGroup>
                      </Col>
                      {/* </Row> */}
                      </Container>       
  
            );
          }
    
LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    onLoggedIn: PropTypes.func.isRequired,
};