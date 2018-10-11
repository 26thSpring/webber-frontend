import React from 'react';
import './PostView.scss';
import { PostViewHeader } from 'components/PostViewHeader';
import { PostViewBody } from 'components/PostViewBody';
import { PostViewFooter } from 'components/PostViewFooter';
const getWindowScroll = () => {
   let y = window.scrollY();
};
const PostView = () => {
   return (
      <div className="PostViewTemplate">
         <div className="PostViewSection">
            <PostViewHeader />
            <PostViewBody />
            <PostViewFooter />
         </div>
      </div>
   );
};

export default PostView;
