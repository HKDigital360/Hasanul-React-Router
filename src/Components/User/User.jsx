import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const{id,name,email,phone}=user;
    const userStyle={
       border: '2px solid yellow',
       borderRadius: '10px',
       padding:'10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;