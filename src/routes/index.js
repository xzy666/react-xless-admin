import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from '../component/Dashboard'
import Buttons from '../component/ui/Buttons'
import IconComponents from '../component/ui/IconComponents'
import Loadings from '../component/ui/Loadings'

export default class ARouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={Dashboard}/>
                <Route exact path="/app/ui/buttons" component={Buttons}/>
                <Route exact path="/app/ui/icons" component={IconComponents}/>
                <Route exact path="/app/ui/loadings" component={Loadings}/>
            </Switch>
        )
    }
}
