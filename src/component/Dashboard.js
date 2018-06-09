import React, {Component} from 'react'
import {Col, Row, Card, Icon} from 'antd'
import BreadcrumbCustom from '../component/BreadcrumbCustom'
import EchartDash from '../component/charts/EchartDash'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <div>
                    <Row gutter={16}>
                        <Col md={4}>
                            <Card bordered={false}>
                                <div>
                                    <span className="text-danger">
                                        <Icon type="heart"/>
                                    </span>
                                    <h2>520</h2>
                                </div>
                            </Card>
                            <Card bordered={false}>
                                <Icon type="plus-square-o" />
                                <span className="">520</span>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card bordered={false}>
                                <div>
                                    <Icon type="info-circle" />
                                    <span className="">520</span>
                                </div>
                            </Card>
                            <Card bordered={false}>
                                <Icon type="warning" />
                                <span className="">520</span>
                            </Card>
                        </Col>
                        <Col md={16}><EchartDash/></Col>
                    </Row>
                </div>
            </div>
        )
    }
}