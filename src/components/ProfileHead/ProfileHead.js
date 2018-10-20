import React from 'react';
import './ProfileHead.scss';

const ProfileHead = ({ data }) => {
   const { thumbnail, nickname, intro } = data;
   return (
      <div className="ProfileHead">
         <div className="ProfileHead_thumbnail">
            <img src={thumbnail} alt={nickname} />
         </div>
         <div className="ProfileHead_profile">
            <span className="ProfileHead_profile_nickname">@{nickname}</span>
            <span className="ProfileHead_profile_introduce">{intro}</span>
         </div>
      </div>
   );
};

export default ProfileHead;
