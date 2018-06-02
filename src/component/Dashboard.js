import React, {Component} from 'react'
import {Col, Row, Card,Icon} from 'antd'
import BreadcrumbCustom from '../component/BreadcrumbCustom'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Card bordered={false} >
                                        <div>
                                            <Icon type="heart" className="text-2x text-danger"/>
                                            <span className="">520</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card bordered={false} >
                                        <Icon type="heart" className="text-2x"/>
                                        <span className="">520</span>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card bordered={false} >
                                        <div>
                                            <Icon type="heart" className="text-2x"/>
                                            <span className="">520</span>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card bordered={false} >
                                        <Icon type="heart" className="text-2x"/>
                                        <span className="">520</span>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16}>col-8</Col>
                    </Row>
                </div>
            </div>
        )
    }
}