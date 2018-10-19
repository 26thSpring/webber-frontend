import React from 'react';
import './PostViewBody.scss';

const PostViewBody = ({ data }) => {
   return <div className="PostViewBody">{data.content}</div>;
};

export default PostViewBody;
