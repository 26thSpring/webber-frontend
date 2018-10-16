import React from 'react';
import './PostWriterPreview.scss';

const PostWriterPreview = ({ preview }) => {
   const { title, content } = preview.toJS();
   return (
      <div className="PostWriterPreview">
         <div className="PostWriterPreview_title">{title}</div>
         <div
            className="PostWriterPreview_content"
            dangerouslySetInnerHTML={{ __html: content }}
         />
      </div>
   );
};

export default PostWriterPreview;
