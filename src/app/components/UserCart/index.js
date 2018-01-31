import React, {Component} from 'react'

class UserCart extends Component {

  render () {
    const user = this.props.payload
    const winrate = (user.games.competitive.won / user.games.competitive.played) * 100
    return (
      <div className='container'>
        <div className='container col-md-12'>
          <div className='row'>
            <div className='col-md-6 border container'>
              <div className='row d-flex justify-content-between align-items-center'>
                <img src={user.portrait} alt='portrait' className='portrait'/>
                {user.username}
                <img src={user.competitive.rank_img} alt='portrait' className='rank_img'/>
                {user.competitive.rank}
              </div>
            </div>
            <div className='col-md-6 border container'>
              <div className='row'>
                <div  className='col-md-6'>Playtime: {user.playtime.competitive}</div>
                <div  className='col-md-6'>Winrate: {winrate.toFixed(2) + '%'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='container col-md-12 border'>
          <div className='row'>
            <div className='col-md-3'>Played: {user.games.competitive.played}</div>
            <div className='col-md-3'>Wins: {user.games.competitive.won}</div>
            <div className='col-md-3'>Loses: {user.games.competitive.lost}</div>
            <div className='col-md-3'>Draws: {user.games.competitive.draw}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserCart
