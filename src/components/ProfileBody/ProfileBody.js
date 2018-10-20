import React from 'react';
import './ProfileBody.scss';
import { TemplatePost } from 'components/TemplatePost';

const ProfileBody = ({ data }) => {
   console.log('profilebody : ' + JSON.stringify(data).templatelist);
   return (
      <div className="ProfileBody">
         <TemplatePost data={data} />
      </div>
   );
};

export default ProfileBody;
