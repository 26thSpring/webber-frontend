import React, { Component } from 'react';
import { CommunityBody } from 'components/CommunityBody';
import { CommunityHead } from 'components/CommunityHead';
import './Community.scss';

const Community = () => {
   return (
      <div className="CommunityTemplate">
         <div className="CommunitySection">
            <CommunityHead />
            <CommunityBody />
         </div>
      </div>
   );
};

export default Community;
