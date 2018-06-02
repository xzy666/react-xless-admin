import React, {Component} from "react"
import {Breadcrumb} from 'antd'


export default class BreadcrumbCustom extends Component {
    render() {
        const route = this.props.pathname.split('/').filter((i) => i)
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                {route && route.map(item => <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>)}
            </Breadcrumb>
        )
    }
}