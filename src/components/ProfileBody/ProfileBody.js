import React from 'react';
import './ProfileBody.scss';
import { TemplatePost } from 'components/TemplatePost';

const ProfileBody = ({ data }) => {
   console.log('다다');
   console.log(data);
   return (
      <div className="ProfileBody">
         <div className="ProfileBody_templateList">
            {data.templateList.map((template, index) => {
               return <TemplatePost data={template} />;
            })}
         </div>
      </div>
   );
};

export default ProfileBody;
