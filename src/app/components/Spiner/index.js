// Spiner source code: https://codepen.io/CCG/pen/KrANmJ

import React from 'react';
import './style.css'

class OverwatchSpiner extends React.Component {
  render() {
    return (
      <div className="loader">
        <ul className="hexagon-container">
          <li className="hexagon hex_1"></li>
          <li className="hexagon hex_2"></li>
          <li className="hexagon hex_3"></li>
          <li className="hexagon hex_4"></li>
          <li className="hexagon hex_5"></li>
          <li className="hexagon hex_6"></li>
          <li className="hexagon hex_7"></li>
        </ul>
      </div>
    )
  }
}

export default OverwatchSpiner
