import React, {Component} from 'react'
import {Line, defaults} from 'react-chartjs-2'

const data = {
  labels: [],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }
  ]
};
class LineChart extends Component {

  setupChart() {
    defaults.global.legend.display = false;
    const scores = this.props.payload
    data.datasets[0].data = scores.map((result) => (result.score))
    data.labels = scores.map((result) => (new Date(result.date).getUTCDate()))
  }

  render() {
    this.setupChart()
    return (
      <div className='container col-md-6'>
        <Line data={data} />
      </div>
    );
  }
}

export default LineChart
