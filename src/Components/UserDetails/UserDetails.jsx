import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user =useLoaderData();
    console.log(user);
    const {website, username}=user;
    return (
        <div>
            <h2>This is User Details Here</h2>
            <p>WebSite : {website}</p>
            <p>UserName : {username}</p>
        </div>
    );
};

export default UserDetails;