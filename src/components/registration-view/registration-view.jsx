import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    <form>
      <label>
        Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label> <br />
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label> <br />
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label> <br />
      <br />
      <label>
        Birthday:
        <input type="date" value={Birthday} onChange={e => setBirthday(e.target.value)} />
      </label> <br />
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

RegistrationView.propTypes = {
  onRegistration: PropTypes.func.isRequired,
};