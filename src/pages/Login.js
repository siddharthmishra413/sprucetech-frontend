import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { Typography } from 'antd';
import { Mutation } from '@apollo/react-components';
import { LOGIN_USER } from '../queries/queries';

import AuthContext from '../context/auth-context';
import logo from '../assets/logo.png';

const { Title } = Typography;

class NormalLoginForm extends Component {
  state = {
    name: '',
    password: ''
  };

  static contextType = AuthContext;

  submitHandler = (event, login) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.updateState(values).then(() => {
        if (!err) {
          login()
            .then(async ({ data }) => {
              if (data.login.token) {
                this.context.login(
                  data.login.token,
                  data.login._id,
                  data.login.firstName,
                  data.login.lastName,
                  data.login.userRole,
                  data.login.tokenExpiration
                );
              }
            })
            .catch(error => {
              let errorType = JSON.parse(JSON.stringify(error));
              return this.props.form.setFields({
                username: {
                  value: values.username,
                  errors: [new Error(errorType.networkError.result.errors[0].message)]
                },
                password: {
                  value: ''
                }
              });
            });
        }
      });
    });
  };

  updateState = values => {
    return new Promise((resolve, reject) => {
      this.setState({ userName: values.username, password: values.password });
      resolve();
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Mutation
        mutation={LOGIN_USER}
        variables={{ userName: this.state.userName, password: this.state.password }}
      >
        {(login, { data, loading, error }) => {
          return (
            <div className="loginPage">
              <div className="App-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="projectName">Nemo</div>
              <div className="frm">
                <Title>Sign In</Title>
                <Form onSubmit={event => this.submitHandler(event, login)} className="login-form">
                  <Form.Item>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </Form.Item>
                  <Form.Item>
                    {/* {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)} */}
                    <NavLink to="/forgot" className="login-form-forgot">
                      Forgot password
                    </NavLink>
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
        }}
      </Mutation>
    );
  }
}

const LoginPage = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default LoginPage;
