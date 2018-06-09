import React, {Component} from 'react'
import {Button, notification,Row,Card,Col} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom'

export default class Notices extends Component {

    render() {
        const openNotification = () => {
            const args = {
                message: 'Notification Title',
                description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: 0,
            };
            notification.open(args);
        };

        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row>
                    <Col>
                        <Card>
                            <Button type="primary" onClick={openNotification}>Open the notification box</Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}