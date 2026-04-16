import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router';

const Post = ({post}) => {
    const{id, title}= post;
const navigate = useNavigate();
const handleNavigate = ()=>{
navigate(`/posts/${id}`)
}

    return (
        <div style={{border:'3px solid green' , borderRadius: '10px', marginTop:'5px'}}>
            <h3>{title}</h3>
            <p>{id}</p>
            <Link to={`/posts/${id}`}>
            <button>Show Post Details</button>
            </Link>
            <button onClick={handleNavigate}>Details Of : {id} </button>
        </div>
    );
};

export default Post;