import React ,{Component} from 'react'
import BreadcrumbCustom from '../BreadcrumbCustom'
import {Row,Col,Card,Button,Modal} from 'antd'

export default class Conversations extends Component{
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    render(){
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row>
                    <Col span={24}>
                        <Card border="false">

                            <Button type="primary" onClick={this.showModal}>Open</Button>
                            <Modal title="Title"
                                   visible={this.state.visible}
                                   onOk={this.handleOk}
                                   confirmLoading={this.state.confirmLoading}
                                   onCancel={this.handleCancel}
                            >
                                <p>{this.state.ModalText}</p>
                            </Modal>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}