import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import SiderCustom from './component/SiderCustom'
import ARouter from './routes'

const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    }

    onCollapse = () => {
        console.log(this.props.location.pathname.split('/'))
        console.log(this.state.collapsed)
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SiderCustom collapsed={this.state.collapsed} onCollapse={this.onCollapse}/>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Menu
                            mode="horizontal"
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="fold" onClick={this.onCollapse}><Icon
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/></Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <ARouter/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        React & Ant Design ©2018 Created by xless.cn
                    </Footer>
                </Layout>
                <style>{`
                    .logo {
                        height: 32px;
                        background: #41B883;
                        margin: 16px;
                        border-radius:8%;
                        text-align:center;
                        line-height:32px;
                    }
                    .ant-layout-sider-children{
                        background: #fff;
                    }
                `}</style>
            </Layout>
        );
    }
}

export default App;
