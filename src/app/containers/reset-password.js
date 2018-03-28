import React from 'react'
import { connect } from 'react-redux'

import ResetPass from '../components/loginForm/reset-pass'
import { resetPassword, validateToken } from '../actions/login'

class ResetPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      success: false,
      resetPass: {
        password: '',
        password2: '',
        wrongPass: false
      },
      emptyFields: {
        password: false,
        password2: false
      },
      btnDisabled: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.props
      .validateToken(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  /**
   * Updates state data from input
   * @param  {[event]} e Click event
   */
  onChange (e) {
    this.setState({
       resetPass: { ...this.state.resetPass, [e.target.name]: e.target.value }
     }, function () {
       this.state.resetPass.password !== this.state.resetPass.password2
         ? this.setState({resetPass: { ...this.state.resetPass, wrongPass: true }, btnDisabled: true })
         : this.setState({resetPass: { ...this.state.resetPass, wrongPass: false }, btnDisabled: false })
     })
  }

  /**
   * Starts submit action.
   * @param  {[event]} e Form submit event
   */
  onSubmit (e) {
    e.preventDefault()
    if (!this.state.btnDisabled) {
      this.checkInput()
    }
  }

  /**
   * Checks if input is valid and calls sendData function.
   */
  // TODO: move this function to utils
  checkInput () {
    let state = this.state.resetPass
    let emptyFields = this.state.emptyFields
    for (let item in state) {
      state[item] === ''
        ? emptyFields[item] = true
        : emptyFields[item] = false
    }
    this.setState({emptyFields: emptyFields}, function () {
      this.sendData()
    })
  }

  /**
   * If input is valid then submit data.
   */
  sendData () {
    const emptyFields = this.state.emptyFields
    const token = this.props.match.params.token
    if (!emptyFields.password && !emptyFields.password2) {
      this.props.resetPassword(this.state.resetPass.password, token).then(() => {
        this.props.history.push('/sign-in')
      })
    }
  }

  render () {
    return (
      <ResetPass
        loading={this.state.loading}
        success={this.state.success}
        payload={this.state.resetPass}
        emptyFields={this.state.emptyFields}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
      />
    )
  }
}

const mapDispatchToProps = {
  resetPassword,
  validateToken
}

export default connect(null, mapDispatchToProps)(ResetPassword)
