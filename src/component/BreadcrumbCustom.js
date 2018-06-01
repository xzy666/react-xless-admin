import React, {Component} from "react"
import {Breadcrumb} from 'antd'


export default class BreadcrumbCustom extends Component {
    render() {
        console.log(this.props)
        // const route=this.props.location.pathname.split('/').filter((i)=>i)
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                {/*{route&&route.map(item=><Breadcrumb.Item>{item}</Breadcrumb.Item>)}*/}
            </Breadcrumb>
        )
    }
}