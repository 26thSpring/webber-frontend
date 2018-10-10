import React from 'react';
import './Setting.scss';
import { Link } from 'react-router-dom';
import { PageHeader } from 'components/PageHeader';

const Setting = () => {
   return (
      <div className="SettingTemplate">
         <PageHeader name="setting" />
         <div className="SettingSection">
            <div className="SettingHeader">setting page</div>
            <div className="SettingBody">
               <div className="Setting_SettingUser">
                  <Link to="pages/SettingUser">User</Link>
               </div>
               <div className="Setting_SettingBoard">
                  <Link to="../SettingBoard">Board</Link>
               </div>
               <div className="Setting_SettingAnal">
                  <Link to="../pages/SettingAnal">Analytics</Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Setting;
