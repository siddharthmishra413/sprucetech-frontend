import React, { Component } from 'react'
import { Layout } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';
import { Table } from 'antd';
import icon_entrant from '../assets/icon_entrant.png';
import icon_clioadmin from '../assets/icon_clioadmin.png';
import icon_juror from '../assets/icon_juror.png';
import { Tag } from 'antd';

const { Content } = Layout;

const columns = [
    {
        title: '',
        dataIndex: 'roleIcon',
        key: 'roleIcon',
        className: 'roleicon',
        render: text => <img alt={text} src={text} />
    },
    {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
    },
    {
        title: 'User Name',
        dataIndex: 'userName',
        key: 'userName',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyname',
    },
    {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
    },
    {
        title: 'Telephone',
        dataIndex: 'telephone',
        key: 'telephone',
    },
    {
        title: 'Role',
        dataIndex: 'userRole',
        key: 'userRole',
        className: 'role',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: 'Updated At',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
    },
];


class Users extends Component {

    state = {
        users: null,
        showFlag: false,
    }

    displayUser = () => {
        let requestBody = {
            query: `
        query {
            users { 
              firstName 
              lastName      
              userName
              title
              companyName
              companyAddress
              telephone
              userRole
              createdAt
              updatedAt
          }
      }
      `}
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
                this.setState({ users: [...resData.data.users], showFlag: true })
                console.log("called")
            })
    };

    componentDidMount() {
        this.displayUser()
    }

    render() {

        return (
            <Layout>
                <div className="innerCont users">
                    <HeaderComp />
                    <Content>
                        <h1>Registered Users</h1>
                        <Tag color="volcano"><img src={icon_clioadmin} alt={icon_clioadmin} /><span>Clio Admin</span></Tag>
                        <Tag color="green"><img src={icon_juror} alt={icon_juror} /><span>Juror</span></Tag>
                        <Tag color="geekblue"><img src={icon_entrant} alt={icon_entrant} /><span>Entrant</span></Tag>
                        {this.state.showFlag && <Table columns={columns} dataSource={this.state.users} />}
                    </Content>
                    <FooterComp />
                </div>
            </Layout>
        );
    }
}

export default Users

