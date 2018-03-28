import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { location, isAuthenticated } = props
  return (
    <div className='text-center'>
      <header className='App-header'>
        {!isAuthenticated
          ? (
            <div className=''>
              <h4>OW Stats</h4>
              {(location.pathname === '/sign-in' || location.pathname === '/sign-up')
                ? <div />
                : <div className='login-section'>
                  <Link to='/sign-in'>Sign in </Link>
                  /
                  <Link to='/sign-up'> Sign up</Link>
                </div>
              }
            </div>
          )
          : (
            <div className='d-flex justify-content-between'>
              <div className='header-navigation'>
                <Link className='Menu-item px-2' to='/'>Main</Link>
                <Link className='Menu-item px-2' to='/login-page'>Login</Link>
                <Link className='Menu-item px-2' to='/users'>Users</Link>
              </div>
              <Link to='/logout'> Logout </Link>
            </div>
          )
        }
      </header>
    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default Header
