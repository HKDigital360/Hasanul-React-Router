import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const{id, title}= post;
    return (
        <div style={{border:'3px solid green' , borderRadius: '10px', marginTop:'5px'}}>
            <h3>{title}</h3>
            <p>{id}</p>
            <Link to={`/posts/${id}`}>
            <button>Show Post Details</button>
            </Link>
        </div>
    );
};

export default Post;