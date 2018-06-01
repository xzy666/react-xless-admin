import React, {Component} from 'react'
import {MenuComponent} from '../component/menu/MenuComponent'
import {menus} from '../constant/menus'

export default class MenuCustom extends Component {
    render() {
        return (
            <MenuComponent menus={menus} defaultSelectedKeys={['1']} mode="inline"/>
        )
    }
}