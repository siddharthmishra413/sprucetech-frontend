import React from 'react';
import { Redirect } from 'react-router-dom';

import logo from '../assets/logo.png';
import { Form, Input, Button } from 'antd';
import { Typography } from 'antd';

import { TOKEN_VERIFICATION, RESET_PASSWORD } from '../queries/queries';
import { Mutation, Query } from '@apollo/react-components';

const { Title } = Typography;

class ResetForm extends React.Component {
  state = {
    confirmDirty: false,
    password: null,
    redirectToLogin: false
  };

  handleSubmit = (e, resdata) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        return this.updatePassword(values.password, resdata);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  updatePassword = async (password, resetData) => {
    await this.updateState(password);
    resetData()
      .then(({ data }) => {
        if (data.passwordReset) {
          this.setState({ redirectToLogin: true });
        }
      })
      .catch(err => {
        console.log(JSON.stringify(err));
      });
  };

  updateState = password => {
    return new Promise((resolve, reject) => {
      this.setState({ password: password });
      resolve();
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.redirectToLogin === true) {
      return <Redirect to="/login" />;
    }

    return (
      <Query
        query={TOKEN_VERIFICATION}
        variables={{ refreshTokenForPassword: this.props.match.params.refreshTokenForPassword }}
      >
        {({ data, loading, error }) => {
          return (
            <div className="resetPage">
              <div className="App-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="projectName">Nemo</div>
              <div className="frm">
                <Title>Reset Password</Title>
                {!loading && data ? <div className="lbl">Please enter new password.</div> : ''}
                {!loading && data ? (
                  <Mutation
                    mutation={RESET_PASSWORD}
                    variables={{
                      refreshToken: this.props.match.params.refreshTokenForPassword,
                      userId: data.tokenVerification.userId,
                      newPassword: this.state.password
                    }}
                  >
                    {(resetData, { data, loading, error }) => {
                      return (
                        <Form
                          onSubmit={event => this.handleSubmit(event, resetData)}
                          className="login-form"
                        >
                          <Form.Item label="Password" hasFeedback>
                            {getFieldDecorator('password', {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please input your password!'
                                },
                                {
                                  validator: this.validateToNextPassword
                                }
                              ]
                            })(<Input.Password />)}
                          </Form.Item>
                          <Form.Item label="Confirm Password" hasFeedback>
                            {getFieldDecorator('confirm', {
                              rules: [
                                {
                                  required: true,
                                  message: 'Please confirm your password!'
                                },
                                {
                                  validator: this.compareToFirstPassword
                                }
                              ]
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                          </Form.Item>
                          <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                              Reset Password
                            </Button>
                          </Form.Item>
                        </Form>
                      );
                    }}
                  </Mutation>
                ) : (
                  <p>Token Expired!</p>
                )}
                <div className="clear"></div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

const WrappedResetForm = Form.create({ name: 'reset_password' })(ResetForm);

export default WrappedResetForm;
