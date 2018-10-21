import React from 'react';
import './PostViewBody.scss';

const PostViewBody = ({ data }) => {
   return (
      <div
         className="PostViewBody"
         dangerouslySetInnerHTML={{
            __html: data.content.replace('\n', '<br />')
         }}
      />
   );
};

export default PostViewBody;
