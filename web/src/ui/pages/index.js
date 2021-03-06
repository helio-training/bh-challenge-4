// TODO Challenge 4 Add a route for the string manipulation challenge
// Place it behind the secured route
import React, { Component } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import CSSModules from 'react-css-modules'

import css from './index.css'
import { protectedRoute } from 'Process/users/auth'
import Footer from 'UI/components/footer'
import Header from 'UI/components/header'
import connected from 'State/connect'

// 404 Page
// import BadRequest from './bad-request/'
import BadRequest from './bad-request/index.solution'

// Secure Pages
// import landing from './secured/landing'
import landing from './secured/landing/index.solution'
import pyramid from './secured/challenges/pyramid'

// Unsecured Pages
import login from './unsecured/login/index.solution'
import home from './unsecured/homepage/index.solution'

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="header-container">
          <Header />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={home} />,
            <Route exact path="/login" component={login} />,
            <Route exact path="/landing" component={protectedRoute(landing)} />
            <Route exact path="/challenges" component={protectedRoute(() => {
              <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />
            })} />
            <Route exact path="/challenges/pyramid" component={protectedRoute(pyramid)} />
            <Route component={BadRequest} />
          </Switch>
        </div>
        <div styleName="footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default withRouter(connected([], [])(CSSModules(App, css)))
