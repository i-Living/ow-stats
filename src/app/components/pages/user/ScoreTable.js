import React, {Component} from 'react'

class ScoreTable extends Component {

  render () {
    const scores = this.props.payload
    return (
      <div className='container col-md-6'>
          <table className='table table-bordered table-striped table-condensed'>
            <thead>
              <tr>
                <td>Rating</td>
                <td>Status</td>
                <td>Change</td>
                <td>Date</td>
              </tr>
            </thead>
            <tbody>
              {scores.slice(0).reverse().map((result, index) => (
                <tr
                key={index}>
                  <td>{result.score}</td>
                  <td>{result.status}</td>
                  <td>{result.change}</td>
                  <td>{new Date(result.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
  }
}

export default ScoreTable
