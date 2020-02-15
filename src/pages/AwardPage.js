import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col, Button, Input, Icon } from 'antd';
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
                        <div className="award-header">
                        <h1>Awards</h1>
                        </div>

                        <div className="cat-page">
        <Row gutter={[16, 16]}>
          <Col span={8}>
          <div className="list-item-main">
            <div className="list-item">
              <h3>Clio Entertainment</h3>
              <p>Best in sports ,advertizing and marketing around the world. Annually the foremost sports business influencers - marketing excutives, commissioners, brodcasters and atheletes alike - convene to select and celebrate the breakthrough communication that push boundaries, permeate pop culture, and establish a new precedent to elevate sports culture in the collective conciousness. </p>

              <div className="review-btn">
              <a href="">Click here to review your 2018 entries</a>
              </div>

              <div className="review-entry mt">
            <div className="details">
                <p>Entries Open: <span>January 27, 2020</span></p>
                <p>First deadlines: <span>March 20, 2020</span></p>
            </div>
              </div>
       
         </div>
         <div className="md-ft-btn">
                  <div className="md-bt-col">
                  <Button type="primary" block disabled>
                            Get Started
                            </Button>
                  </div>
                  <div className="md-bt-col">
                  <p href="#" className="cust-entry"> My Entries <Input type="text" value="0" /> </p>
                      </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
          <div className="list-item-main">
            <div className="list-item">
              <h3>Clio Health</h3>
              <p>Best in sports ,advertizing and marketing around the world. Annually the foremost sports business influencers - marketing excutives, commissioners, brodcasters and atheletes alike - convene to select and celebrate the breakthrough communication that push boundaries, permeate pop culture, and establish a new precedent to elevate sports culture in the collective conciousness. </p>

              <div className="review-btn">
              <a href="">Click here to review your 2018 entries</a>
              </div>

              <div className="review-entry mt">
            <div className="details">
                <p>Entries Open: <span>January 27, 2020</span></p>
                <p>First deadlines: <span>March 20, 2020</span></p>
            </div>
              </div>
       
         </div>
         <div className="md-ft-btn">
                  <div className="md-bt-col">
                  <Button type="primary" block disabled >
                            Get Started
                            </Button>
                  </div>
                  <div className="md-bt-col">
                  <p href="#" className="cust-entry"> My Entries <Input type="text" value="0" /> </p>
                      </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
          <div className="list-item-main">
            <div className="list-item">
              <h3>Clio Cannabis</h3>
              <p>Best in sports ,advertizing and marketing around the world. Annually the foremost sports business influencers - marketing excutives, commissioners, brodcasters and atheletes alike - convene to select and celebrate the breakthrough communication that push boundaries, permeate pop culture, and establish a new precedent to elevate sports culture in the collective conciousness. </p>

              <div className="review-btn">
              <a href="">Click here to review your 2018 entries</a>
              </div>

              <div className="review-entry mt">
            <div className="details">
                <p>Entries Open: <span>January 27, 2020</span></p>
                <p>First deadlines: <span>March 20, 2020</span></p>
            </div>
              </div>
       
         </div>
         <div className="md-ft-btn">
                  <div className="md-bt-col">
                  <NavLink to="/mediums">
                  <Button type="primary" block className="active">
                            Get Started
                            </Button>
                            </NavLink>
                
                  </div>
                  <div className="md-bt-col">
                  <p href="#" className="cust-entry"> My Entries <Input type="text" value="0" /> </p>
                      </div>
              </div>
            </div>
          </Col>
        </Row>
       
  
      </div>

                    </Content>
                    <div className="clear"></div>
                    <FooterComp />
                </div>
            </Layout>
        );
    }
}

export default Awards