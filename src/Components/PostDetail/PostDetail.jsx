import React from 'react';
import { useNavigate } from 'react-router';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post=useLoaderData();
    const {body, title}= post;

const navigate=useNavigate();
//  const goBackHandler=()=>{
//     navigate =()
//  }

    return (
        <div style={{border:'2px solid red', borderRadius:'10px', padding:"5px"}}>
            <h2>{title}</h2>
            <p>{body}</p>
             <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
       
    );
};

export default PostDetail;