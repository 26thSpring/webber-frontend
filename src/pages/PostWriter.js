import React from 'react';
import './PostWriter.scss';
import PostWriterContainer from 'containers/PostWriterContainer';

const PostWriter = () => {
   return (
      <div className="PostWriterTemplate">
         <form
            id="postWriterForm"
            action="http://localhost:9090/api/community"
            method="POST"
            className="PostWriterSection"
         >
            <PostWriterContainer />
         </form>
      </div>
   );
};

export default PostWriter;
