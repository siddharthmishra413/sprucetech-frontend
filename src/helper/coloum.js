import React from 'react';
import { NavLink } from 'react-router-dom';

export const Columns = [
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
    key: 'firstName'
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName'
  },
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyname'
  },
  {
    title: 'Company Address',
    dataIndex: 'companyAddress',
    key: 'companyAddress'
  },
  {
    title: 'Telephone',
    dataIndex: 'telephone',
    key: 'telephone'
  },
  {
    title: 'Role',
    dataIndex: 'userRole',
    key: 'userRole',
    className: 'role'
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <span>
        <NavLink to={'/edituser/' + record._id}>Edit</NavLink>
      </span>
    )
  }
];
