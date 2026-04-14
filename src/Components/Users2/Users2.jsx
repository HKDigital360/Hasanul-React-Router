import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
const users =use(usersPromise);
console.log('Users 2 Promise Dataload', users);
    return (
        <div>
            <h2>This Is Users 2</h2>
        </div>
    );
};

export default Users2;