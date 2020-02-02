import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Typography } from 'antd';
import { gql } from 'apollo-boost';

import logo from '../assets/logo.png';

const { Title } = Typography;

class NormalLoginForm extends Component {

  submitHandler = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(values.username)) {
        return this.props.form.setFields({
          user: {
            value: values.user,
            errors: [new Error('Please enter a valid username')],
          },
        });
      }
      if (!err) {
        console.log('Received values of form: ', this.props.data);
        
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="loginPage">
        <div className="App-logo"><img src={logo} alt="logo" /></div>
        <div className="projectName">Nemo</div>
        <div className="frm">
          <Title>Sign In</Title>
          <Form onSubmit={this.submitHandler} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="/forgot">
                Forgot password
          </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
          </Button>
              Or <NavLink to="/signup">Register Now!</NavLink>
            </Form.Item>
          </Form>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

// const LOGIN_POST = gql`
// query Login($email: String!, $password: String!) {
//   login(email: $email, password: $password) {
//     userId
//     token
//     tokenExpiration
//   }
// }
// `;
// const USERS_POST = gql`
//       query {
//           users {
//         userName
//       }
//     }
//     `

const LoginPage = Form.create({ name: 'normal_login' })(NormalLoginForm);

// export default graphql(USERS_POST)(LoginPage);
export default LoginPage;
