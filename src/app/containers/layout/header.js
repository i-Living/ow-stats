import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Welcome to Owerwatch stats</h1>
        </header>
          <Link to='/' className="Menu-item">Main</Link>
          <Link to='/login-page' className="Menu-item">Login</Link>
          <Link to='/users' className="Menu-item">Users</Link>
      </div>
    );
  }
}

export default Header;
