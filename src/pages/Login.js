import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { Typography } from 'antd';
// import { gql } from 'apollo-boost';

import AuthContext from '../context/auth-context';
import logo from '../assets/logo.png';

const { Title } = Typography;

class NormalLoginForm extends Component {

  static contextType = AuthContext;

  submitHandler = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      var re = /\S+@\S+\.\S+/;
      if (!re.test(values.username)) {
        return this.props.form.setFields({
          username: {
            value: values.username,
            errors: [new Error('Please enter a valid username')],
          },
        });
      }
      if (!err) {
        let requestBody = {
          query: `
            query{
              login(userName: "${values.username}", password: "${values.password}"){
                _id
                firstName
                lastName
                userRole
                token
                tokenExpiration
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
          }).then(resData => {
            if (resData.errors) {
              if (resData.errors[0].status === 404) {
                return this.props.form.setFields({
                  username: {
                    value: values.username,
                    errors: [new Error(resData.errors[0].message)],
                  },
                  password: {
                    value: ""
                  }
                });
              }
              throw new Error(resData.errors[0].message);
            }
            if (resData.data.login.token) {
              this.context.login(
                resData.data.login.token,
                resData.data.login._id,
                resData.data.login.firstName,
                resData.data.login.lastName,
                resData.data.login.userRole,
                resData.data.login.tokenExpiration
              );
            }
          })
          .catch(err => {
            console.log(err);
          });

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
              {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)} */}
              <NavLink to="/forgot" className="login-form-forgot">Forgot password</NavLink>
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

const LoginPage = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginPage;
