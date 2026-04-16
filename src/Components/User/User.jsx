import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

     const [showDetail, setShowDetail]=useState(false);

    const{id,name,email,phone}=user;
   
   
const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());
// console.log("user promise data", userPromise);

    const userStyle={
       border: '2px solid yellow',
       borderRadius: '10px',
       padding:'10px',
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={()=>setShowDetail(!showDetail)}>{showDetail ? "Hide" : 'Show'} info</button>
            {
               showDetail && <Suspense fallback={<span>Loading...</span>}>
<UserDetails2 userPromise={userPromise}></UserDetails2>
               </Suspense> 
            }
        </div>
    );
};

export default User;