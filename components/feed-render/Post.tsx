'use client'
import React, { useState } from 'react';
import { GrMore } from "react-icons/gr";
import { RiHeart3Line } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { posts } from '../../dummyData';
import CodeSnippet from '../CodeSnippet';

const Post = () => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className='w-full px-[9px] py-[10px] border border-txt rounded-[10px] mb-[20px]'>
          {/* Profile */}
          <div className="flex justify-between items-center">
            <div className='flex items-center gap-[7px]'>
              <img className="rounded-full w-[36px] h-[36px]" src={post.profileImage} alt="Profile" />
              <div>
                <h1 className="text-[14px] text-txt leading-4">{post.username}</h1>
                <p className="text-[10px] text-lite-txt">{post.date}</p>
              </div>
            </div>
            <GrMore className="text-[16px] text-txt" />
          </div>
          {/* Text */}
          <div className="pt-[12px] font-extralight text-txt text-[12px] md:text-[16px]">
            <p>{post.text}</p>
          </div>
          {/* Code */}
          <CodeSnippet post={post} />
          {/* Hashtags */}
          <div className="flex gap-[14px] pt-[12px] text-lite-txt text-[12px]">
            {post.hashtags.map((hashtag, index) => (
              <p key={index}>{hashtag}</p>
            ))}
          </div>
          {/* Like, Comment, Share */}
          <div className="pt-[12px] flex gap-[10px] text-txt text-[24px]">
            <div className='flex gap-[2px] items-center'>
              <RiHeart3Line />
              <p className='text-[12px]'>{post.likes}</p>
            </div>
            <div className='flex gap-[2px] items-center'>
              <BiCommentDetail />
              <p className='text-[12px]'>{post.comments}</p>
            </div>
            <div className='flex gap-[2px] items-center'>
              <IoShareSocialOutline />
              <p className='text-[12px]'>{post.shares}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;