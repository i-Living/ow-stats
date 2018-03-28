import React from 'react'
import { connect } from 'react-redux'

import ForgotPass from '../components/loginForm/forgot-pass'
import { forgotPassword } from '../actions/login'

class ForgotPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      success: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  /**
   * Updates state data from input
   * @param  {[event]} e Click event
   */
  onChange (e) {
    this.setState({
      email: e.target.value
    })
  }

  /**
   * Starts submit action.
   * @param  {[event]} e Form submit event
   */
  onSubmit (e) {
    e.preventDefault()
    this.props.forgotPassword(this.state.email)
      .then(() => this.setState({ success: true }))
  }

  render () {
    return (
      <ForgotPass
        email={this.state.email}
        success={this.state.success}
        emailConfirmError={this.props.emailConfirmError}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    emailConfirmError: state.user.emailConfirmError ? state.user.emailConfirmError : ''
  }
}

const mapDispatchToProps = {
  forgotPassword
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
