import React, {Component} from 'react'
import {Row, Col, Card,Icon} from 'antd'
import BreadcrumbCustom from '../BreadcrumbCustom'

export default class IconComponents extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row>
                    <Col span={24}>
                        <Card border={false}>
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                            <Icon type="step-backward" />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <Card border={false}>

                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}