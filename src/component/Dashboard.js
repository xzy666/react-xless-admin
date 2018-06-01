import React, {Component} from 'react'
import BreadcrumbCustom from '../component/BreadcrumbCustom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom/>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    Bill is a cat.
                </div>
            </div>
        )
    }
}