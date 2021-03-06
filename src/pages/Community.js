import React from 'react';
import { CommunityBody } from 'components/CommunityBody';
import { PageHeader } from 'components/PageHeader';
import './Community.scss';

const Community = () => {
   return (
      <div className="CommunityTemplate">
         <PageHeader name="community" />
         <div className="CommunitySection">
            <CommunityBody />
         </div>
      </div>
   );
};

export default Community;
