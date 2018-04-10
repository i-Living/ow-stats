import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../../styles/login-form.scss'

const SignIn = (props) => {
  return (
    <form className='form-signin text-left' onSubmit={props.onSubmit}>
      <label htmlFor='inputEmail' className='form-label'>Email address</label>
      <input
        type='email'
        name='email'
        id='inputEmail'
        className='form-control'
        placeholder='Email address'
        value={props.email}
        onChange={props.onChange}
        autoFocus
      />
      {props.emptyFields.email && <div className='form-input-error'>Email is required</div>}
      <div className='d-flex justify-content-between'>
        <label htmlFor='inputPassword' className='form-label'>Password</label>
        <Link to='/forgot-password' className='text-right' onClick={this.onGoToResetPass}>Forgot password?</Link>
      </div>
      <input
        type='password'
        name='password'
        id='inputPassword'
        className='form-control'
        placeholder='Password'
        value={props.password}
        onChange={props.onChange}
      />
      {props.emptyFields.password && <div className='form-input-error'>Passwords is required</div>}
      {props.loginError && <div className='form-input-error'>{props.loginError}</div>}
      <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
    </form>
  )
}

SignIn.propTypes = {
  payload: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }).isRequired,
  emptyFields: PropTypes.shape({
    email: PropTypes.bool.isRequired,
    password: PropTypes.bool.isRequired
  }).isRequired,
  loginError: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SignIn
