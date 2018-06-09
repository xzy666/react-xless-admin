import React ,{Component} from 'react'
import { Spin ,Row ,Col,Card,Alert,Switch,Button} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom'
import NProgress from 'nprogress'

export default class Loadings extends Component{
    state = { loading: false }
    toggle = (value) => {
        this.setState({ loading: value });
    }
    nprogressStart = () => {
        NProgress.start();
    };
    nprogressDone = () => {
        NProgress.done();
    };
    render(){
        const container = (
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        );
        return(
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row>
                    <Col span={12}>
                        <Card  border={false}>
                            <Spin/>
                        </Card>
                    </Col><
                    Col span={12}>
                        <Card border={false}>
                            <Spin size="small" />
                            <Spin />
                            <Spin size="large" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Card  border={false}>
                             <Spin tip="Loading...">
                                <Alert
                                    message="Alert message title"
                                    description="Further details about the context of this alert."
                                    type="info"
                                />
                            </Spin>
                        </Card>
                    </Col><
                    Col span={12}>
                        <Card border={false}>
                            <Spin spinning={this.state.loading} delay={500} >{container}</Spin>
                            <div style={{ marginTop: 16 }}>
                                Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
                            </div>
                        </Card>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <h4>顶部进度条</h4>
                                <p>
                                    <Button icon="caret-right" onClick={this.nprogressStart} />
                                    <span> NProgress.start() — 显示进度条</span>
                                </p>
                                <p style={{marginTop: 20}}>
                                    <Button icon="caret-right" onClick={this.nprogressDone} />
                                    <span>  NProgress.done() — 进度条完成</span>
                                </p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}