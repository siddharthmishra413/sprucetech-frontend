import React, { Component } from 'react';
import { Layout, Input, Button } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';

const { Content } = Layout;


class AddRole extends Component {
  render() {
    return (
      <Layout>
        <div className="medium-category-pg innerCont">
          <HeaderComp />
          <Content>

        <div style={{maxWidth:300}}>
          <Input placeholder="Add New Role" /><br/><br/>
          <Button type="primary">Add New Role</Button>
          </div>

          


          </Content>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default AddRole;
