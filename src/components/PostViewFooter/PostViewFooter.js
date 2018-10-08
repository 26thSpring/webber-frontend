import React from 'react';
import './PostViewFooter.scss';
import { Reply } from 'components/Reply';

const PostViewFooter = () => {
   return (
      <div className="PostViewFooter">
         <div className="replyForm">
            <textarea
               name="replyForm"
               id="replyForm"
               placeholder="Add Your Comment! (140)"
            />
         </div>
         <div className="replyPost">
            <div className="replyPost_button">POST</div>
         </div>
         <div className="replyList">
            <Reply />
            <Reply />
            <Reply />
            <Reply />
         </div>
      </div>
   );
};
export default PostViewFooter;
