import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';

import { Card } from 'antd';

const { Meta } = Card;

const { Content } = Layout;

class Awards extends Component {
  render() {
    return (
      <Layout>
        <div className="innerCont">
          <HeaderComp />
          <Content>
            <h1>Awards</h1>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>

            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title="Name of the item"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, molestie pulvinar tortor eget, lacinia accumsan neque."
              />
              <div className="price">Price: $100</div>
            </Card>
          </Content>
          <div className="clear"></div>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default Awards;
