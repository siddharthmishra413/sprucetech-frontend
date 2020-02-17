import React, { Component } from 'react';
import { Layout, Button, Table, Divider, Tag } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';

const { Content } = Layout;

const columns = [

  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Edit</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    role: 'Entrant',
  },
  {
    key: '2',
    role: 'Juror',
  },
  {
    key: '3',
    role: 'Clio Admin',
  },
  {
    key: '4',
    role: 'Admin',
  },
];



class ManageRoles extends Component {
  render() {
    return (
      <Layout>
        <div className="medium-category-pg innerCont">
          <HeaderComp />
          <Content>

          <Button type="primary">Add Role</Button>

          <Table columns={columns} dataSource={data} />


          </Content>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default ManageRoles;
