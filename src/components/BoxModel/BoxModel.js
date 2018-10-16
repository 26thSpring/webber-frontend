import React from 'react';
import './BoxModel.scss';

const componentDrag = e => {
   e.dataTransfer.setData('component', { type: 'boxModel', tag: e.target.id });
   console.log(e.target.id);
};

const BoxModel = () => {
   return (
      <div className="BoxModel">
         <div className="BoxModel_btn_dropdown">박스 모델</div>
         <div className="BoxModel_dropdown_menu">
            <div className="BoxModel_div">
               {'<div />'}
               <div
                  id="div"
                  draggable="true"
                  onDragStart={componentDrag}
                  className="BoxModel_div_clone"
               >
                  {'<div />'}
               </div>
            </div>
            <div className="BoxModel_span">
               {'<span />'}
               <div
                  id="span"
                  draggable="true"
                  onDragStart={componentDrag}
                  className="BoxModel_span_clone"
               >
                  {'<span />'}
               </div>
            </div>
         </div>
      </div>
   );
};

export default BoxModel;
