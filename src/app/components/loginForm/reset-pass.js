import React from 'react'
import PropTypes from 'prop-types'

const ResetPass = (props) => (
  <div className="col-12">
    <div className="content">
      {props.loading && <h4>Loading</h4>}
      {!props.loading &&
        props.success &&
        (<form className='form-signin text-left' onSubmit={props.onSubmit}>
          <label htmlFor='inputPassword' className='form-label mt-2'>Password</label>
          <input
            type='password'
            name='password'
            id='inputPassword'
            className='form-control no-br'
            placeholder='Password'
            value={props.password}
            onChange={props.onChange}
          />
          {props.payload.wrongPass && <div className='form-input-error'>Passwords are different</div>}
          {props.emptyFields.password && <div className='form-input-error'>Passwords is required</div>}
          <label htmlFor='inputPassword2' className='form-label mt-2'>Confirm password</label>
          <input
            type='password'
            name='password2'
            id='inputPassword2'
            className='form-control'
            placeholder='Confirm password'
            value={props.password2}
            onChange={props.onChange}
          />
          {props.payload.wrongPass && <div className='form-input-error'>Passwords are different</div>}
          {props.emptyFields.password2 && <div className='form-input-error'>Password confirm is required</div>}
          <button className='btn btn-lg btn-primary btn-block' type='submit'>Update password</button>
        </form>
      )}
      {!props.loading && !props.success && <h4>Invalid Token</h4>}
    </div>
  </div>
)

ResetPass.propTypes = {
  payload: PropTypes.shape({
    password: PropTypes.string.isRequired,
    password2: PropTypes.string.isRequired,
    wrongPass: PropTypes.bool.isRequired
  }).isRequired,
  emptyFields: PropTypes.shape({
    password: PropTypes.bool.isRequired,
    password2: PropTypes.bool.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ResetPass
