import React ,{Component} from 'react'
import { Spin ,Row ,Col,Card,Alert,Switch} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom'


export default class Loadings extends Component{
    state = { loading: false }
    toggle = (value) => {
        this.setState({ loading: value });
    }
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
                </Row>
            </div>
        )
    }
}