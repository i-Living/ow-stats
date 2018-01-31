import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './pages/main-page'
import User from './pages/user'
import Footer from '../containers/layout/footer';
import Header from '../containers/layout/header'

import '../App.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/users/:user" component={User} />
          <Footer />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
