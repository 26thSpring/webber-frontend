import React from 'react';
import './CustomComponent.scss';

const CustomComponent = ({ what }) => {
   const TagName = what;
   return <TagName>{`<${TagName} />`}</TagName>;
};

export default CustomComponent;
