import React from 'react';
import './CustomComponent.scss';

const CustomComponent = ({ what, id }) => {
   const TagName = what;
   return <TagName id={id}>{`<${TagName} />`}</TagName>;
};

export default CustomComponent;
