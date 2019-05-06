import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SingIn from './pages/singin/index'

const Routes = () => (
    <BrowserRouter>
    <Switch>
    <Route path= '/' component = {SingIn} />
    <Route path= '/:id' component = {SingIn} />
    </Switch>
    </BrowserRouter>
)

export default Routes