import React, { Component } from 'react';
import { Layout, Modal, Checkbox, Radio, Row, Col, Upload, Button, Input, Icon } from 'antd';

class MediumsList extends Component {
  state = {
    loading: false,
    visible: false,
  };
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div className="mediums-listg-pg">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="list-item">
              <h3>Audio(Health & Wellness)</h3>
              <p>Entries in this medium include all types of creative audio content</p>
              <a href="#" onClick={this.showModal}>Create New Entry</a>
            </div>
          </Col>
          <Col span={8}>
            <div className="list-item">
              <h3>Audio Technique(Health & Wellness)</h3>
              <p>Entries in this medium include all types of creative audio content</p>
              <a href="#">Create New Entry</a>
            </div>
          </Col>
          <Col span={8}>
            <div className="list-item">
              <h3>Branded Entertainment & content(Health & Wellness)</h3>
              <p>Entries in this medium include all types of creative audio content</p>
              <a href="#" onClick={this.showModal}>Create New Entry</a>
            </div>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="list-item">
              <h3>Design(Health & Wellness)</h3>
              <p>Entries in this medium include all types of creative audio content</p>
              <a href="#" onClick={this.showModal}>Create New Entry</a>
            </div>
          </Col>
          <Col span={8}>
            <div className="list-item">
              <h3>Design/Mobile(Health & Wellness)</h3>
              <p>Entries in this medium include all types of creative audio content</p>
              <a href="#" onClick={this.showModal}>Create New Entry</a>
            </div>
          </Col>
          <Col span={8}>
            <div className="list-item">
              <h3>Digital/Mobile & Social Media technique(Health & Wellness)</h3>
              <p>Entries in this medium include all types of creative audio content</p>
              <a href="#" onClick={this.showModal}>Create New Entry</a>
            </div>
          </Col>
        </Row>
        <Modal
          visible={visible}
          title="Please Provide a Short Title For Your Entry"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
            <div className="title-entry">
          <p>The entry title is a sort name for this entry. Keep it short, memorable and descriptive. Do not include the brand name, agency name, or medium type.</p>
          <div className="mt">
            <Input placeholder="Enter title name" />
            </div>
         </div>
        </Modal>
      </div>
    );
  }
}

export default MediumsList;
