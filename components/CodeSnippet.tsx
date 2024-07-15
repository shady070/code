import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface PostType {
  id: number;
  profileImage: string;
  username: string;
  date: string;
  text: string;
  code: string;
  hashtags: string[];
  likes: number;
  comments: number;
  shares: number;
}

const CodeSnippet = ({ post }: { post: PostType }) => {
  const [showFullCode, setShowFullCode] = useState(false);

  const handleReadMore = () => {
    setShowFullCode(true);
  };

  const handleReadLess = () => {
    setShowFullCode(false);
  };

  const truncatedCode = post.code.substring(0, 100); // Adjust length as needed

  return (
    <div>
      <SyntaxHighlighter language="python" style={okaidia}>
        {showFullCode ? post.code : `${truncatedCode}...`}
      </SyntaxHighlighter>
      {!showFullCode ? (
        <div
          className="w-full h-[40px] bg-txt rounded-[5px] flex items-center justify-center text-bg cursor-pointer"
          onClick={handleReadMore}
        >
          <p>Read More</p>
        </div>
      ) : (
        <div
          className="w-full h-[40px] bg-txt rounded-[5px] flex items-center justify-center text-bg cursor-pointer"
          onClick={handleReadLess}
        >
          <p>Read Less</p>
        </div>
      )}
    </div>
  );
};

export default CodeSnippet;
