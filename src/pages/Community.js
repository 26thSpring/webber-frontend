import React from 'react';
import { CommunityBody } from 'components/CommunityBody';
import { CommunityHead } from 'components/CommunityHead';
import './Community.scss';

const Community = () => {
   return (
      <div className="CommunityTemplate">
         <CommunityHead />
         <div className="CommunitySection">
            <CommunityBody />
         </div>
      </div>
   );
};

export default Community;
