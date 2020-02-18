import React, { Component } from 'react';
import { Layout, Button, Table, Divider, Tag } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';
import { NavLink } from 'react-router-dom';
import { Query } from '@apollo/react-components';
import { GET_ROLE } from '../queries/queries';

const { Content } = Layout;

const columns = [
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  }
  // {
  //   title: 'Action',
  //   key: 'action',
  //   render: (text, record) => (
  //     <span>
  //       <a onClick={() => manageRoles.deleteHandler(record)}>Delete</a>
  //     </span>
  //   )
  // }
];

const data = [
  {
    key: '1',
    role: 'Entrant'
  },
  {
    key: '2',
    role: 'Juror'
  },
  {
    key: '3',
    role: 'Clio Admin'
  },
  {
    key: '4',
    role: 'Admin'
  }
];

class ManageRoles extends Component {
  deleteHandler = data => {};

  displayRoles = data => {
    return data.roles.map((element, index) => {
      element.key = index;
      return element;
    });
  };

  render() {
    return (
      <Query query={GET_ROLE}>
        {({ data, loading, error, refetch }) => {
          refetch();
          if (error) return <p>error</p>;
          return (
            <Layout>
              <div className="medium-category-pg innerCont">
                <HeaderComp />
                <Content>
                  <Button type="primary">
                    <NavLink to="/addrole">Add Role</NavLink>
                  </Button>
                  {!loading && data.roles.length && (
                    <Table columns={columns} dataSource={this.displayRoles(data)} />
                  )}
                </Content>
                <FooterComp />
              </div>
            </Layout>
          );
        }}
      </Query>
    );
  }
}

const manageRoles = new ManageRoles();

export default ManageRoles;
