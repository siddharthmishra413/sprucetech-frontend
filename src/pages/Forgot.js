import React from 'react'
import logo from '../assets/logo.png';
import { Form, Icon, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';

const { Title } = Typography;

class ForgotForm extends React.Component {

  state = {
    showLinkFlag: false,
    link: ""
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let requestBody = {
          query: `
            query{
              forgotPassword(userName:"${values.email}"){
                message
                link
              }
            }
            `
        };
        fetch('http://localhost:3000/api', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            return res.json();
          })
          .then(resdata => {
            if (resdata.data.forgotPassword.link) {
              this.setState({
                showLinkFlag: true,
                link: resdata.data.forgotPassword.link,
              })
            }
          })
          .catch(err => {
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="resetPage">
        <div className="App-logo"><img src={logo} alt="logo" /></div>
        <div className="projectName">Nemo</div>
        <div className="frm">
          <Title>Forgot Password</Title>
          <div className="lbl">Please enter your email address to request a password reset.</div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }],
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email Address"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Send Mail
            </Button>
              <a href="/">Back to Sign In</a>
            </Form.Item>
          </Form>

          <div className="clear"></div>
        </div>
        {this.state.showLinkFlag === true ? <div className="rst"><NavLink to={this.state.link}>Please click on the link to reset your password</NavLink></div> : ""}
      </div>

    );
  }
}

const WrappedForgotForm = Form.create({ name: 'forgot_password' })(ForgotForm);

export default WrappedForgotForm