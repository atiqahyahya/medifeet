import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Login from './components/login'
import Staff from './components/staff'
import Manager from './components/manager'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
        	<Route path='/login' component={Login} />    
        	<Route path='/staff' component={Staff} /> 
          <Route path='/manager' component={Manager} />    
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes