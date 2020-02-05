import React from 'react'
import { Redirect } from 'react-router-dom';

import logo from '../assets/logo.png';
import { Form, Input, Button } from 'antd';
import { Typography } from 'antd';



const { Title } = Typography;

class ResetForm extends React.Component {
  state = {
    confirmDirty: false,
    showFormFlag: false,
    userId: null,
    refreshToken: null,
    redirectToLogin: false,
  };


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.updatePassword(values.password);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

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

  tokenVerification(refreshTokenForPassword) {
    let requestBody = {
      query: `mutation{ tokenVerification(refreshTokenForPassword: "${refreshTokenForPassword}")
        {
          userName
          userId
        }
      }`
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
        if (resdata.data.tokenVerification.userName && resdata.data.tokenVerification.userId) {
          this.setState({
            showFormFlag: true,
            userId: resdata.data.tokenVerification.userId,
            refreshToken: refreshTokenForPassword
          })
        }
      })
      .catch(err => {
      });
  }

  updatePassword(password) {
    let requestBody = {
      query: `mutation{ passwordReset(refreshToken: "${this.state.refreshToken}", userId: "${this.state.userId}", newPassword: "${password}" ){message}}`
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
        if (resdata.data.passwordReset) {
          this.setState({ redirectToLogin: true })
        }
      })
      .catch(err => {
      });
  }

  componentDidMount() {
    const refreshTokenForPassword = this.props.match.params.refreshTokenForPassword;
    this.tokenVerification(refreshTokenForPassword);
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.redirectToLogin === true) {
      return <Redirect to='/login' />
    }
    return (
      <div className="resetPage">
        <div className="App-logo"><img src={logo} alt="logo" /></div>
        <div className="projectName">Nemo</div>
        <div className="frm">
          <Title>Reset Password</Title>
          {this.state.showFormFlag ? <div className="lbl">Please enter new password.</div> : ""}
          {this.state.showFormFlag ? <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Reset Password
            </Button>
            </Form.Item>
          </Form> : <p>Token Expired!</p>}
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

const WrappedResetForm = Form.create({ name: 'reset_password' })(ResetForm);

export default WrappedResetForm