import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Checkbox, Radio, Row, Col, Upload, Button, Icon } from 'antd';
import HeaderComp from '../Header';
import FooterComp from '../Footer';
import Item from 'antd/lib/list/Item';

const { Content } = Layout;
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  }
  // defaultFileList: [
  //   {
  //     uid: '1',
  //     name: 'xxx.png',
  //     status: 'done',
  //     response: 'Server Error 500', // custom error message to show
  //     url: 'http://www.baidu.com/xxx.png'
  //   },
  //   {
  //     uid: '2',
  //     name: 'yyy.png',
  //     status: 'done',
  //     url: 'http://www.baidu.com/yyy.png'
  //   },
  //   {
  //     uid: '3',
  //     name: 'zzz.png',
  //     status: 'error',
  //     response: 'Server Error 500', // custom error message to show
  //     url: 'http://www.baidu.com/zzz.png'
  //   }
  // ]
};
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

class Taxonomy extends Component {
  render() {
    return (
      <Layout>
        <div className="innerCont about">
          <HeaderComp />
          <Content>
            <h1>Mediums</h1>
            <div className="mng-taxonomy-section">
              <div className="medium-list">
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>Audio</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>Audio(Health and Wellness)</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>Audio(Pharmaceutical)</Checkbox>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>Audio Technique</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>Audio Technique(Health and Wellness)</Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>Audio Technique(Pharmaceutical)</Checkbox>
                  </Col>
                </Row>
                <Row gutter={[16, 16]}>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>
                      Beauty:<span>Design</span>
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>
                      Beauty:<span>Design(mass)</span>
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox onChange={onChange}>
                      Beauty:<span>Design(Prestige)</span>
                    </Checkbox>
                  </Col>
                </Row>
              </div>
              <div className="media-plyr-upd mt">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <div className="media-plyr-body">
                      <h1>Media Player Pause Slide</h1>
                      <div className="upload-btn">
                        <Upload {...props}>
                          <Button>
                            <Icon type="upload" /> Upload
                          </Button>
                        </Upload>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="actv-itm mt">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Checkbox>This Award is Currently Active</Checkbox>
                  </Col>
                </Row>
              </div>

              <div className="actv-itm mt">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Checkbox>
                      <b>
                        This Award is Ready for Winners To Start Being Released on{' '}
                        <a href="www.clios.com">CLIO.COM</a>
                      </b>
                    </Checkbox>
                  </Col>
                </Row>
              </div>

              <div className="media-plyr-upd mt">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <div className="media-plyr-body">
                      <div className="content-col">
                        <p>
                          Media Handling Fees <Radio>Required</Radio>
                        </p>
                      </div>
                      <div className="content-desc">
                        <p className="label">35</p>
                        <p className="label-desc">
                          When videos are included in an entry, this is the fees amount that will be
                          assessed for media handling
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="media-plyr-upd mt">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <div className="media-plyr-body">
                      <div className="content-col">
                        <p>
                          Bank Transfer Fees <Radio>Required</Radio>
                        </p>
                      </div>
                      <div className="content-desc">
                        <p className="label">35</p>
                        <p className="label-desc">
                          When videos are included in an entry, this is the fees amount that will be
                          assessed for media handling
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="upd-prgm-btn mt">
                <NavLink to="/mediums">
                  <Button type="primary">Update Program</Button>
                </NavLink>
              </div>
            </div>
          </Content>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default Taxonomy;
