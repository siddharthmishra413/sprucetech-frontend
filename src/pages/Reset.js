import React from 'react'
import logo from '../logo.png';
import { Form, Icon, Input, Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

class ResetForm extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
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
        <Title>Reset Password</Title>
        <div className="lbl">Please enter new password.</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Confirm Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Reset Password
            </Button>
          </Form.Item>
        </Form>
        <div className="clear"></div>
        </div>
        </div>
      );
    }
  }

  const WrappedResetForm = Form.create({ name: 'reset_password' })(ResetForm);

  export default WrappedResetForm