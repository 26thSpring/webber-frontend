import React from 'react';
import './Profile.scss';
import { ProfileHead } from 'components/ProfileHead';
import { ProfileBody } from 'components/ProfileBody';

const Profile = () => {
   return (
      <div className="ProfileTemplate">
         <div className="ProfileHead_mobile_head" />
         <div className="ProfileSection">
            <ProfileHead />
            <ProfileBody />
         </div>
      </div>
   );
};

export default Profile;
