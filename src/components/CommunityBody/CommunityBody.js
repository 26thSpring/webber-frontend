import React from 'react';
import { Post } from 'components/Post';
import './CommunityBody.scss';

const CommunityBody = () => {
   return (
      <div className="CommunityBody">
         <div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
         </div>
      </div>
   );
};

export default CommunityBody;
