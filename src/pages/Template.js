import React from 'react';
import './Template.scss';
import { TemplatePost } from 'components/TemplatePost';
import { ContentHeader } from 'components/ContentHeader';

const Template = () => {
   return (
      <div className="TemplateTemplate">
         <ContentHeader title="template" />
         <div className="TemplateSection">
            <div className="TemplateList">
               <TemplatePost />
            </div>
         </div>
      </div>
   );
};

export default Template;
