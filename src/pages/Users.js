import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';
import { Table } from 'antd';
import icon_entrant from '../assets/icon_entrant.png';
import icon_clioadmin from '../assets/icon_clioadmin.png';
import icon_juror from '../assets/icon_juror.png';
import { Tag } from 'antd';
import { Query } from '@apollo/react-components';
import { Columns } from '../helper/coloum';
import { GET_USER } from '../queries/queries';

const { Content } = Layout;

class Users extends Component {
  state = {
    users: null,
    showFlag: false
  };

  displayUsers(data) {
    return data.users.map((element, index) => {
      element.key = index;
      if (typeof element.userRole === 'object' && element.userRole !== null) {
        let userRoleArray = element.userRole.map(item => item.role);
        let userRole = userRoleArray.join(',');
        element.userRole = userRole;
      }
      return element;
    });
  }

  render() {
    return (
      <Query query={GET_USER}>
        {({ data, loading, error }) => {
          if (error) return <p>error</p>;

          return (
            <Layout>
              <div className="innerCont users">
                <HeaderComp />
                <Content>
                  <h1>Registered Users</h1>
                  {/* <Tag color="volcano">
                    <img src={icon_clioadmin} alt={icon_clioadmin} />
                    <span>Clio Admin</span>
                  </Tag>
                  <Tag color="green">
                    <img src={icon_juror} alt={icon_juror} />
                    <span>Juror</span>
                  </Tag>
                  <Tag color="geekblue">
                    <img src={icon_entrant} alt={icon_entrant} />
                    <span>Entrant</span>
                  </Tag> */}
                  {!loading && data.users.length && (
                    <Table columns={Columns} dataSource={this.displayUsers(data)} />
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

export default Users;
