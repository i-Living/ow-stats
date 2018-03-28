import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Header from './components/layouts/header'
import MainPage from './components/pages/main-page'
import LoginConfirm from './components/loginForm/login-confirm'
import User from './components/pages/user'
import LoginForm from './containers/login-form'
import ForgotPassword from './containers/forgot-password'
import ResetPassword from './containers/reset-password'
import Logout from './containers/logout'
import { logout } from './actions/login'

import './styles/App.css'

class App extends React.Component {
  render () {
    const { location, isAuthenticated } = this.props
    return (
      <div className='App'>
        <Header isAuthenticated={isAuthenticated} location={location} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/users/:user" component={User} />
          <Route exact path='/sign-in' component={LoginForm} />
          <Route exact path='/sign-up' component={LoginForm} />
          <Route exact path='/forgot-password' component={ForgotPassword} />
          <Route exact path='/login-confirm/:token' component={LoginConfirm} />
          <Route exact path='/reset-password/:token' component={ResetPassword} />
          <Route exact path='/logout' render={props => <Logout {...props} isAuthenticated={isAuthenticated} />} />
        </Switch>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.user ? !!state.user.email : false,
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
