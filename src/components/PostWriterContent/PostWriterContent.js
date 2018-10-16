import React from 'react';
import './PostWriterContent.scss';

const PostWriterContent = () => {
   return (
      <div className="PostWriterContent">
         <textarea
            className="PostWriterContent_writer"
            name="content"
            placeholder="당신의 이야기를 적어주세요."
         />
      </div>
   );
};

export default PostWriterContent;
