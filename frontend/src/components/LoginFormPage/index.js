import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/home" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='splash-form-container'>

      <form onSubmit={handleSubmit}
      className='login-form'>
        <ul>
          {errors.map((error, idx) => <li className='errors' key={idx}>{error}</li>)}
        </ul>


          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            className='login-inputs'
            placeholder='Username'
          />



          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='login-inputs'
            placeholder='Password'
          />
        <div className='login-btn'>
           <button id='login-btn' type="submit">Log In</button>
          <button id='demo-btn' onClick={() => {
                  setCredential('Demo-lition');
                  setPassword('password');
                }} type="submit" className='formBtn'>Sign in as a Demo User</button>
        </div>
      </form>
    </div>

  );
}

export default LoginFormPage;
