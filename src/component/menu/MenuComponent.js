import React from 'react'
import {Icon, Menu} from 'antd';
import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;


export const menuItem = ({key, icon, title, link, ...props}) => {
    return (
        <Menu.Item
            key={key || link}
            {...props}
        >
            <Link to={link || key}>
                {icon && <Icon type={icon}/>}
                <span className="nav-text">{title}</span>
            </Link>
        </Menu.Item>
    )
}

export const subMenuItem = ({key, icon, title, link, sub, ...props}) => {
    return (
        <SubMenu
            key={link || key}
            title={<span><Icon type={icon}/><span>{title}</span></span>}
        >
            {sub && sub.map(item => menuItem(item))}
        </SubMenu>
    )
}

export const MenuComponent = ({menus, ...props}) => {
    return (
        <Menu {...props}>
            {menus && menus.map(item => item.sub ? subMenuItem(item) : menuItem(item))}
        </Menu>
    )
}


