import React from 'react'
import { Form, Input, Tooltip, Icon, Button } from 'antd';
import { Typography } from 'antd';
import { Redirect } from 'react-router-dom';

// import Login from './Login';
import logo from '../assets/logo.png';

const { Title } = Typography;
const { TextArea } = Input;
// const { Option } = Select;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    toLogin: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let requestBody = {
          query: `mutation{ signup( userInput: { firstName:"${values.firstname}", lastName: "${values.lastname}", userName: "${values.username}", password: "${values.password}", title:"${values.title}", companyName: "${values.companyname}", 
            companyAddress: "${values.companyaddress}", telephone: ${parseInt(values.phone)}, userRole: "user"})
            {
              firstName
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
          }).then(resData => {
            if (resData.errors) {
              if (resData.errors[0].status === 400)
                return this.props.form.setFields({
                  username: {
                    value: values.username,
                    errors: [new Error(resData.errors[0].message)],
                  },
                });
              throw new Error(resData.errors[0].message);
            }
            if (resData.data.signup) {
              this.setState({ toLogin: true })
            }
          })
          .catch(err => {
            console.log(err)
          });
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



  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    // const prefixSelector = getFieldDecorator('prefix', {
    //   initialValue: '91',
    // })(
    //   <Select style={{ width: 70 }}>
    //     <Option value="91">+91</Option>
    //     <Option value="44">+44</Option>
    //   </Select>,
    // );

    if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }

    return (
      <div className="registerPage">
        <div className="App-logo"><img src={logo} alt="logo" /></div>
        <div className="projectName">Nemo</div>
        <div className="frm">
          <Title>Register Now</Title>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item
              label={
                <span>
                  Firstname&nbsp;
            </span>
              }
            >
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Lastname&nbsp;
            </span>
              }
            >
              {getFieldDecorator('lastname', {
                rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Title/Role&nbsp;
            </span>
              }
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input your title/role!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Company Name&nbsp;
            </span>
              }
            >
              {getFieldDecorator('companyname', {
                rules: [{ required: true, message: 'Please input your company name!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Company Address&nbsp;
            </span>
              }
            >
              {getFieldDecorator('companyaddress', {
                rules: [{ required: true, message: 'Please input your company address!', whitespace: true }],
              })(<TextArea rows={4} />)}
            </Form.Item>


            <Form.Item
              label={
                <span>
                  Phone Number&nbsp;
            </span>
              }
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(<Input />)}
            </Form.Item>
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
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
          </Button>
            </Form.Item>
          </Form>
          <div className="clear"></div>
        </div>
      </div>
    );
  }
}

const SignupPage = Form.create({ name: 'register' })(RegistrationForm);

export default SignupPage