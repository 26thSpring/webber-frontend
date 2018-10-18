import React from 'react';
import './PostWriterContent.scss';

const PostWriterContent = ({ onContentChange }) => {
   return (
      <div className="PostWriterContent">
         <textarea
            className="PostWriterContent_writer"
            name="content"
            placeholder="당신의 이야기를 적어주세요."
            onInput={onContentChange.bind(this)}
         />
      </div>
   );
};

export default PostWriterContent;
