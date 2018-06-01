import React, {Component} from 'react'
import {Layout, Icon, Menu} from 'antd';
import MenuCustom from './MenuCustom'
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderCustom extends Component{


    render() {
        return (
            <Sider
                collapsed={this.props.collapsed}
                onCollapse={this.props.onCollapse}
            >
                <div className="logo">
                    xless
                </div>
                <MenuCustom/>
                <style>
                    {`
                    .logo {
                        height: 32px;
                        background: #41B883;
                        margin: 16px;
                        border-radius:8%;
                        text-align:center;
                        line-height:32px;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}