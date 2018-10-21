import React from 'react';
import './Editor.scss';
import EditorContainer from 'containers/EditorContainer';

const Editor = () => {
   return (
      <div className="EditorTemplate">
         <div className="EditorSection">
            <EditorContainer />
         </div>
      </div>
   );
};

export default Editor;
