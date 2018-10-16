import React from 'react';
import './PostWriter.scss';
import { PostWriterHeader } from 'components/PostWriterHeader';
import { PostWriterContent } from 'components/PostWriterContent';
import { PostWriterPreview } from 'components/PostWriterPreview';
import PostWriterContainer from 'containers/PostWriterContainer';

const PostWriter = () => {
   return (
      <div className="PostWriterTemplate">
         <div className="PostWriterSection">
            <PostWriterContainer />
            {/* <PostWriterHeader />
            <div className="PostWriterBody">
               <PostWriterContent />
               <PostWriterPreview />
            </div> */}
         </div>
      </div>
   );
};

export default PostWriter;
