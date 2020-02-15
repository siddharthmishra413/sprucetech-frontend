import React, { Component } from 'react';
import { Layout, Tabs, Checkbox, Radio, Row, Col, Upload, Button, Icon } from 'antd';
import HeaderComp from '../Header';
import FooterComp from '../Footer';
import MediumsList from './MediumsList';
import Item from 'antd/lib/list/Item';

const { Content } = Layout;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

class Mediums extends Component {
  render() {
    return (
      <Layout>
        <div className="medium-category-pg innerCont">
          <HeaderComp />
          <Content>
            <div className="mediums-tabs">
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Health and Wellness" key="1">
                  <MediumsList />
                </TabPane>
                <TabPane tab="Pharmaceuticals" key="2">
                  Pharmaceuticals
                </TabPane>
                <TabPane tab=" Students" key="3">
                  Students
                </TabPane>
              </Tabs>
            </div>
          </Content>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default Mediums;
