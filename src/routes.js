import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

//general
import Login from './components/login'

//Staff
import Staff from './components/staff'
import Form from './components/staff/form'

//Manager
import Manager from './components/manager'

//Item
import Item from './components/item'

//NavBar
import NavBar from './components/global/header'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
      	<div>
        	<Route path='/login' component={Login} />    
        	<Route path='/staff' component={Staff} /> 
          <Route path='/form' component={Form} />
          <Route path='/manager' component={Manager} />
          <Route path='/item' component={Item} />
          <Route path='/navbar' component={NavBar} />

        </div>
      </BrowserRouter>
    )
  }
}

export default Routes