import React from 'react'
import PropTypes from 'prop-types'

const ForgotPass = (props) => (
  <div className="col-12">
    <div className="content">
      {props.success
        ? (<h5>Email has been sent</h5>)
        : (<div>
            <h6>Enter your email address and we will send you a link to reset your password</h6>
            <form className='form-signin' onSubmit={props.onSubmit}>
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
              {props.emailConfirmError && <div className='form-input-error'>{props.emailConfirmError}</div>}
              <button className='btn btn-lg btn-primary btn-block' type='submit'>Send password reset</button>
            </form>
          </div>
        )}
    </div>
  </div>
)

ForgotPass.propTypes = {
  email: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  emailConfirmError: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ForgotPass
