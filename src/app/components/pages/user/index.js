import React, {Component} from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import {fetchUser, addSR} from '../../../actions/user'
import ScoreTable from './ScoreTable'
import LineChart from './LineChart'
import OverwatchSpiner from '../../Spiner'

const scores = [
  {
    'score': 2981,
    'status': 'Draw',
    'change': 0,
    'date': 1516628872840
  }, {
    'score': 2986,
    'status': 'Win',
    'change': + 23,
    'date': 1516628854440
  }, {
    'score': 2963,
    'status': 'Lose',
    'change': -18,
    'date': 1516628854115
  }
]

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userTag: '',
      scores: scores,
      score: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({score: event.target.value})
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.user)
  }

  onAddSR() {
    const change = this.state.score - scores.slice(-1)[0].score
    const result = {
      'score': this.state.score * 1,
      'status': change > 0
        ? 'Win'
        : (
          change < 0
          ? 'Lose'
          : 'Draw'),
      'change': change,
      'date': Date.now()
    }
    this.props.addSR(result, this.state.scores)
    this.setState({scores: this.state.scores})
  }

  render() {
    const {user} = this.props
    return (
      <div className="col-12">
        {
          user.username
            ? (
              <div className="content">
                <div>{user.username}</div>
                <div>Start sr: {user.competitive.rank}</div>
                <br/>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-2">
                    <div className="input-group">
                      <input type="text" className="form-control" value={this.state.score} onChange={this.handleChange}/>
                      <span className="input-group-btn">
                        <button className="btn btn-secondary" type="button" onClick={this.onAddSR.bind(this)}>Add SR</button>
                      </span>
                    </div>
                  </div>
                </div>
                <LineChart payload= {this.state.scores}/>
                <ScoreTable payload={this.state.scores}/>
              </div>)
            : (<OverwatchSpiner />)
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {user: state.user, newScores: state.scores, usertag: state.userTag}
}

const mapDispatchToProps = {
  fetchUser,
  addSR
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User))
