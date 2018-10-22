import React from 'react';
import './Template.scss';
import { TemplatePost } from 'components/TemplatePost';
import { ContentHeader } from 'components/ContentHeader';
import TemplateListContainer from 'containers/TemplateListContainer';

const Template = () => {
   return (
      <div className="TemplateTemplate">
         <ContentHeader title="template" />
         <div className="TemplateSection">
            <TemplateListContainer />
         </div>
      </div>
   );
};

export default Template;
