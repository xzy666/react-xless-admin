import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import SiderCustom from './component/SiderCustom'

const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({collapsed});
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <SiderCustom collapsed={this.state.collapsed} onCollapse={this.onCollapse}/>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            Bill is a cat.
                        </div>
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
