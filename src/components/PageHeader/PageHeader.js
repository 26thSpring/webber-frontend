import React from 'react';
import './PageHeader.scss';

const PageHeader = ({ ...props }) => {
   return <div className="PageHeader">{props.name}</div>;
};

export default PageHeader;
