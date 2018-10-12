import React from 'react';
import './BoxModel.scss';

const BoxModel = () => {
   return (
      <div className="BoxModel">
         <div className="BoxModel_btn_dropdown">박스 모델</div>
         <div className="BoxModel_dropdown_menu">
            <div className="BoxModel_div">{'<div />'}</div>
            <div className="BoxModel_span">{'<span />'}</div>
         </div>
      </div>
   );
};

export default BoxModel;
