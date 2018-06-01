import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from '../component/Dashboard'

export default class ARouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={Dashboard}/>
                <Route exact path="/app/ui/buttons" component={Dashboard}/>
            </Switch>
        )
    }
}
