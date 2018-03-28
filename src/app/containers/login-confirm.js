import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { confrim } from '../actions/login'
import OverwatchSpiner from '../components/Spiner'

class LoginConfirm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      success: false
    }
  }

  componentDidMount() {
    this.props
      .confirm(this.props.match.params.token)
      .then(() => this.setState({ loading: false, success: true }))
      .catch(() => this.setState({ loading: false, success: false }));
  }

  render () {
    const { loading, success } = this.state;
    return (
      <div>
        {loading && (
          <div className="col-12">
            <div className="content">
              <h4>Validating your email</h4>
              <OverwatchSpiner />
            </div>
          </div>
        )}

        {!loading &&
        success && (
          <div className="col-12">
            <div className="content">
              <h4>Thank you. Your account has been verified.</h4>
              <Link to="/">Go to your page</Link>
            </div>
          </div>
        )}

        {!loading &&
        !success && (
          <div className="col-12">
            <div className="content">
              <h4>Ooops. Invalid token it seems.</h4>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = {
  confirm
}

export default connect(null, mapDispatchToProps)(LoginConfirm)
