import React from 'react';
import './ProfileBody.scss';
import { TemplatePost } from 'components/TemplatePost';

const ProfileBody = () => {
   return (
      <div className="ProfileBody">
         <div className="ProfileBody_TemplateList">
            <TemplatePost />
            <TemplatePost />
            <TemplatePost />
            <TemplatePost />
            <TemplatePost />
            <TemplatePost />
            <TemplatePost />
         </div>
      </div>
   );
};

export default ProfileBody;
