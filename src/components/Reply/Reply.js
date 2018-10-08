import React from 'react';
import './Reply.scss';
import reply_modify from 'static/images/reply_modify.svg';
import reply_trash from 'static/images/reply_trash.svg';

const Reply = () => {
   return (
      <div className="Reply">
         <div className="Reply_thumbnail">
            <img
               src="https://st2.depositphotos.com/3166285/8940/i/950/depositphotos_89401118-stock-photo-portrait-of-a-beautiful-little.jpg"
               alt="Reply_thumbnail"
            />
         </div>
         <div className="Reply_body">
            <div className="Reply_head">
               <div className="Reply_nickname">Reply_nickname</div>
               <div className="Reply_regdate">2018-10-05</div>
            </div>
            <div className="Reply_contents">this is Reply contents</div>
            <div className="Reply_buttons">
               <img
                  className="Reply_modify"
                  src={reply_modify}
                  alt="Reply_modify"
               />
               <img
                  className="Reply_trash"
                  src={reply_trash}
                  alt="Reply_trash"
               />
            </div>
         </div>
      </div>
   );
};
export default Reply;
