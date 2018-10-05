import React from 'react';
import './Reply.scss';

const Reply = () => {
   return (
      <div className="Reply">
         <div className="Reply_thumbnail">
            <img
               src="https://st2.depositphotos.com/3166285/8940/i/950/depositphotos_89401118-stock-photo-portrait-of-a-beautiful-little.jpg"
               alt="Reply_thumbnail"
            />
         </div>
         <div className="Reply_head">
            <div className="Reply_nickname">Reply_nickname</div>
            <div className="Reply_regdate">2018-10-05</div>
         </div>
         <div className="Reply_body">
            <div className="Reply_contents">this is Reply contents</div>
         </div>
      </div>
   );
};
export default Reply;
