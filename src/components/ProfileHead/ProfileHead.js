import React from 'react';
import './ProfileHead.scss';

const ProfileHead = () => {
   return (
      <div className="ProfileHead">
         <div className="ProfileHead_thumbnail">
            <img
               src="http://shinmorae.com/files/gimgs/12_nov_2016.jpg"
               alt="profile_thumbnail"
            />
         </div>
         <div className="ProfileHead_profile">
            <span className="ProfileHead_profile_nickname">@webber</span>
            <span className="ProfileHead_profile_introduce">
               웨버 프로젝트 매니저, 프론트엔드 엔지니어
            </span>
         </div>
      </div>
   );
};

export default ProfileHead;
