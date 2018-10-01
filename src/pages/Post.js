import React from 'react';

const Post = ({ match }) => {
   return (
      <div>
         <h3>포스트 {match.params.id}</h3>
      </div>
   );
};

export default Post;
