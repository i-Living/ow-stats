import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'

import UserCart from '../UserCart'
import OverwatchSpiner from '../Spiner'
import {fetchUser, onGoToUserPage} from '../../actions/user'
// import {onGoToUserPage} from '../../actions'


class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      userTag: '',
      redirectToUser: false,
      isLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.goToUserPage = this.goToUserPage.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  handleChange(event) {
    this.setState({userTag: event.target.value})
  }

  getUser() {
    this.setState({isLoading: true})
    this.props.fetchUser(this.state.userTag)
  }

  goToUserPage() {
    this.setState({redirectToUser: true})
    this.props.onGoToUserPage(this.state.userTag)
  }

  renderLoadingState() {
    const {user} = this.props
    return (
      <div>
          {
            user.username
            ? (<div className='container col-md-12 cursor-pointer' onClick={this.goToUserPage}>
                <UserCart payload={user}/>
              </div>)
            : (<OverwatchSpiner />)
          }
      </div>
    )
  }

  render() {
    if (this.state.redirectToUser) {
      let link = '/users/' + this.state.userTag.replace('#', '-')
      return (
        <Redirect to={link}/>
      )
    }

    return (
      <div className="col-12">
        <div className="content">
          {
            this.state.isLoading
            ? this.renderLoadingState()
            : (<div className="container col-md-6">
                <p>For example: LIVING#2891</p>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-6">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="BatteTag" value={this.state.value} onChange={this.handleChange}/>
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.getUser}>Go!</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>)
  }
}

const mapStateToProps = state => {
  return {user: state.user, userTag: state.userTag, isLoading: state.isLoading}
}

const mapDispatchToProps = {
  fetchUser,
  onGoToUserPage
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage))
