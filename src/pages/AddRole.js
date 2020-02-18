import React, { Component } from 'react';
import { Layout, Input, Button } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';
import { Mutation } from '@apollo/react-components';
import { CREATE_ROLE } from '../queries/queries';
import { Redirect } from 'react-router-dom';

const { Content } = Layout;

class AddRole extends Component {
  state = {
    redirectFlag: false,
    role: null
  };

  createRoleHandler = (createRole, value) => {
    if (!value) return;
    createRole()
      .then(({ data }) => {
        if (data.createRole) {
          this.setState({ redirectFlag: true });
        }
      })
      .catch(err => {
        let errorType = JSON.parse(JSON.stringify(err));
        console.log(errorType.graphQLErrors[0].message);
      });
  };

  render() {
    if (this.state.redirectFlag) return <Redirect to="/managerole" />;
    return (
      <Mutation mutation={CREATE_ROLE} variables={{ role: this.state.role }}>
        {(createRole, { data, loading, error }) => {
          return (
            <Layout>
              <div className="medium-category-pg innerCont">
                <HeaderComp />
                <Content>
                  <div style={{ maxWidth: 300 }}>
                    <Input
                      placeholder="Add New Role"
                      onChange={event => this.setState({ role: event.target.value })}
                    />
                    <br />
                    {error ? (
                      <p style={{ color: 'red' }}>
                        {JSON.parse(JSON.stringify(error)).graphQLErrors[0].message}
                      </p>
                    ) : (
                      ''
                    )}
                    <br />
                    <Button
                      type="primary"
                      onClick={() => this.createRoleHandler(createRole, this.state.role)}
                    >
                      Add New Role
                    </Button>
                  </div>
                </Content>
                <FooterComp />
              </div>
            </Layout>
          );
        }}
      </Mutation>
    );
  }
}

export default AddRole;
