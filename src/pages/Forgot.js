import React from 'react'
import logo from '../assets/logo.png';
import { Form, Icon, Input, Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

class ForgotForm extends React.Component {

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
            console.log("resdata====================>", resdata)
          })
          .catch(err => {
            console.log("------------------error", err);
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
      </div>
    );
  }
}

const WrappedForgotForm = Form.create({ name: 'forgot_password' })(ForgotForm);

export default WrappedForgotForm