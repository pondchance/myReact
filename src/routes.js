import React from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom'

import Login from './pages/Login'
import Main from './pages/Main'

const Routes =() => {
    return  ( 
<Switch>
    <Route exact path="/login" component={Login} />
    {!localStorage.getItem('username') ? (
      <Redirect to="/login" />
    ) : (
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    )}
  </Switch>
 )
   
}

export default Routes