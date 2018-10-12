import React from 'react';
import './Editor.scss';
import { EditorNav } from 'components/EditorNav';
import { EditorView } from 'components/EditorView';

const Editor = () => {
   return (
      <div className="EditorTemplate">
         <div className="EditorSection">
            <EditorNav />
            <EditorView />
         </div>
      </div>
   );
};

export default Editor;
