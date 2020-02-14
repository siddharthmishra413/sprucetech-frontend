import React from 'react'
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import logo from '../assets/logo.png';
import { Menu, Dropdown } from 'antd';
import { Avatar } from 'antd';

import AuthContext from '../context/auth-context';

const { Header } = Layout;

const HeaderComp = props => (

    <AuthContext.Consumer>
        {context => {
            return (
                <Header>
                    <div className="App-logo"><img src={logo} alt="logo" /></div>
                    <div className="projectName">Nemo</div>
                    <div className="navbar">
                        <div className="l">
                            <NavLink to="/awards">Awards</NavLink>
                            <NavLink to="/about">About Clio</NavLink>
                            {context.isAdmin && <NavLink to="/users">Registered Users</NavLink>}
                        </div>
                        <div className="m">
                            <Dropdown overlay={
                                <Menu>
                                    <Menu.Item>
                                        <NavLink to="/login" onClick={context.logout}>Logout</NavLink>
                                    </Menu.Item>
                                </Menu>}>
                                <div className="ant-dropdown-link">
                                    <Avatar icon="user" />
                                </div>
                            </Dropdown>
                        </div>
                        <div className="r">Welcome! {context.firstName} {context.lastName} <span>({context.isAdmin ? 'admin' : 'user'})</span></div>
                        <div className="clear"></div>
                    </div>
                </Header>
            );
        }}
    </AuthContext.Consumer>
);


export default HeaderComp