import React from 'react';
import './ContentHeader.scss';

const ContentHeader = ({ ...props }) => {
   return <div className="ContentHeader">{props.title}</div>;
};

export default ContentHeader;
