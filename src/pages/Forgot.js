import React from 'react';
import logo from '../assets/logo.png';
import { Form, Icon, Input, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import { Typography } from 'antd';
import { Mutation } from '@apollo/react-components';

import { FORGOT_USER } from '../queries/queries';

const { Title } = Typography;

class ForgotForm extends React.Component {
  state = {
    showLinkFlag: false,
    link: '',

    userName: null
  };

  submitHandler = (e, forgotPassword) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.updateState(values).then(() => {
          forgotPassword()
            .then(({ data }) => {
              if (data.forgotPassword.link) {
                this.setState({
                  showLinkFlag: true,
                  link: data.forgotPassword.link
                });
              }
            })
            .catch(errorType => {
              return this.props.form.setFields({
                email: {
                  value: values.email,
                  errors: [new Error(errorType.networkError.result.errors[0].message)]
                }
              });
            });
        });
      }
    });
  };

  updateState = values => {
    return new Promise((resolve, reject) => {
      this.setState({ userName: values.email });
      resolve();
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Mutation mutation={FORGOT_USER} variables={{ userName: this.state.userName }}>
        {(forgotPassword, { data, loading, error }) => {
          return (
            <div className="resetPage">
              <div className="App-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="projectName">Nemo</div>
              <div className="frm">
                <Title>Forgot Password</Title>
                <div className="lbl">
                  Please enter your email address to request a password reset.
                </div>
                <Form
                  onSubmit={event => this.submitHandler(event, forgotPassword)}
                  className="login-form"
                >
                  <Form.Item>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Please input your email!' }]
                    })(
                      <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Email Address"
                      />
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
              {this.state.showLinkFlag === true ? (
                <div className="rst">
                  <NavLink to={this.state.link}>
                    Please click on the link to reset your password
                  </NavLink>
                </div>
              ) : (
                ''
              )}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

const WrappedForgotForm = Form.create({ name: 'forgot_password' })(ForgotForm);

export default WrappedForgotForm;
