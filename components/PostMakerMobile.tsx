'use client'
import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const PostMakerMobile = () => {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [codeValue, setCodeValue] = useState("");

  const toggleCodeInput = () => {
    setShowCodeInput(!showCodeInput);
    // Reset codeValue when hiding the input
    if (!showCodeInput) {
      setCodeValue("");
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCodeValue(e.target.value);
  };

  return (
    <div className="mb-[140px]">
      <textarea
        className="h-[428px] text-txt font-extralight w-full bg-[#1A1A1A] px-[22px] py-[22px] rounded-t-[10px]"
        placeholder="New Post"
      />
      <div className="h-[46px] bg-txt rounded-b-[10px] flex items-center px-[22px] justify-between">
        <div className="text-[22px] text-bg cursor-pointer" >
          <FaCode onClick={toggleCodeInput} />
        </div>
        <div className="text-[22px] text-bg">
          <MdOutlineFileUpload />
        </div>
      </div>
      {showCodeInput && (
        <div className="bg-[#1A1A1A] px-[22px] py-[10px] rounded-b-[10px]">
          <textarea
            className="w-full bg-[#1A1A1A] text-txt font-extralight placeholder-lite-txt outline-none"
            placeholder="Enter your code here..."
            value={codeValue}
            onChange={handleCodeChange}
          />
        </div>
      )}
    </div>
  );
};

export default PostMakerMobile;