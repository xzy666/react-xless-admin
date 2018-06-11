import React, {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom';
import Dashboard from '../component/Dashboard'
import Buttons from '../component/ui/Buttons'
import IconComponents from '../component/ui/IconComponents'
import Loadings from '../component/ui/Loadings'
import Conversations from '../component/ui/Conversations'
import Notices from '../component/ui/Notices'
import Tags from '../component/ui/Tags'
import Banners from '../component/ui/Banners'
import Editors from '../component/ui/Editors'

export default class ARouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/dashboard/index" component={Dashboard}/>
                <Route exact path="/app/ui/buttons" component={Buttons}/>
                <Route exact path="/app/ui/icons" component={IconComponents}/>
                <Route exact path="/app/ui/loadings" component={Loadings}/>
                <Route exact path="/app/ui/conversations" component={Conversations}/>
                <Route exact path="/app/ui/notices" component={Notices}/>
                <Route exact path="/app/ui/tags" component={Tags}/>
                <Route exact path="/app/ui/banners" component={Banners}/>
                <Route exact path="/app/ui/editors" component={Editors}/>
            </Switch>
        )
    }
}
