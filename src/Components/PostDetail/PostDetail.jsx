import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post=useLoaderData();
    const {body, title}= post;
    return (
        <div style={{border:'2px solid red', borderRadius:'10px', padding:"5px"}}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;