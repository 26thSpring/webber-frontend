import React from 'react';
import './PostViewFooter.scss';

const PostViewFooter = () => {
   return (
      <div className="PostViewFooter">
         <div className="replyForm">
            <textarea
               name="replyForm"
               id="replyForm"
               placeholder="Add Your Comment!"
            />
         </div>
         <div className="replyPost">
            <div className="replyPost_button">POST</div>
         </div>
      </div>
      <div className="">
        <div>
            dddd
        </div>
      </div>
   );
};
export default PostViewFooter;
