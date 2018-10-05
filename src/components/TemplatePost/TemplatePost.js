import React from 'react';
import './TemplatePost.scss';
import { Link } from 'react-router-dom';
import { MdImage, MdMoreVert } from 'react-icons/md';
import { TiHeartOutline, TiBookmark } from 'react-icons/ti';
import { IconContext } from 'react-icons';

const TemplatePost = () => {
   return (
      <div className="TemplatePost">
         <Link className="TemplatePost_head" to="/template">
            <div className="TemplatePost_head_thumbnail">
               <IconContext.Provider value={{ size: '80', color: 'white' }}>
                  <MdImage />
               </IconContext.Provider>
            </div>
            <div className="TemplatePost_head_whiteSpace" />
         </Link>
         <div className="TemplatePost_body">
            <div className="TemplatePost_body_info">
               <div className="writer">
                  <Link to="/template">webber</Link>
               </div>
               <div className="regdate_reply">2 days ago · 3 reply</div>
            </div>
            <div className="TemplatePost_body_toggle">
               <IconContext.Provider
                  value={{ size: '23', className: 'likeIcon' }}
               >
                  <div className="toggle_like flex-row-center">
                     <TiHeartOutline />
                     13
                  </div>
               </IconContext.Provider>
               <IconContext.Provider
                  value={{ size: '23', className: 'bookmarkIcon' }}
               >
                  <div className="toggle_bookmark flex-row-center">
                     <TiBookmark />
                  </div>
               </IconContext.Provider>
               <IconContext.Provider value={{ size: '23' }}>
                  <div className="button_more flex-row-center">
                     <MdMoreVert />
                  </div>
               </IconContext.Provider>
            </div>
         </div>
      </div>
   );
};

export default TemplatePost;
