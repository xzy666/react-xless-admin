import React, {Component} from 'react'
import {Table, Icon, Divider, Row, Col, Card} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical"/>
      <a href="javascript:;">Delete</a>
      <Divider type="vertical"/>
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down"/>
      </a>
    </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];
export default class BasicTables extends Component {

    render() {
        return (
            <div>
                <BreadcrumbCustom {...this.props.location}/>
                <Row><Col><Card>
                    <Table columns={columns} dataSource={data} />
                </Card></Col></Row>
            </div>
        )
    }
}