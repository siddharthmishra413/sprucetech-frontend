import React from 'react';

export default React.createContext({
    token: null,
    _id: null,
    firstName: null,
    lastName: null,
    userRole: null,
    isAdmin: null,
    tokenExpiration: null,
    login: (token, _id, firstName, lastName, userRole, tokenExpiration) => { },
    logout: () => { }
});