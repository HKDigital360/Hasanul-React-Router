import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
const {name, username, address:{city}}=use(userPromise);

    return (
        <div>
            <p>Name : {name}</p>
            <p>City : {city}</p>
            <p><small> UserName : {username}</small></p>
        </div>
    );
};

export default UserDetails2;