import React from 'react';
import Post from './feed-render/Post';
import SideNav from './desktop/SideNav';
import RightBar from './desktop/RightBar';
import PostMaker from './PostMaker';

const Hero = () => {
  return (
    <div className='lg:flex'>
      <div className="hidden lg:block lg:fixed lg:left-30 lg:top-85 lg:pr-[35px]">
        <SideNav />
      </div>
      <div className="lg:ml-[240px]">
        <PostMaker />
        <Post />
      </div>
      <div className='hidden lg:block lg:pl-[35px]'>
        <RightBar />
      </div>
    </div>
  );
}

export default Hero;
