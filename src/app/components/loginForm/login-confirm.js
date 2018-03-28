import React from 'react'
import { Link } from 'react-router-dom'

const LoginConfirm = () => (
  <div className="col-12">
    <div className="content">
      <h4>Confirmation letter was send to your email</h4>
      <Link to='/sign-in'>Go to login form</Link>
    </div>
  </div>
)

export default LoginConfirm
