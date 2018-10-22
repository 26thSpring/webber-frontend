import React from 'react';
import PostListContainer from 'containers/PostListContainer';
import { Post } from 'components/Post';
import './CommunityBody.scss';
import { Link } from 'react-router-dom';
//import InfiniteScroll from 'react-infinite-scroller';

const CommunityBody = () => {
   return (
      <div className="CommunityBody">
         <div className="CommunityBody_link_postwriter_wrapper">
            <Link to="/postwriter" className="CommunityBody_link_postwriter">
               write
            </Link>
         </div>
         <PostListContainer />
      </div>
   );
};

export default CommunityBody;
//
