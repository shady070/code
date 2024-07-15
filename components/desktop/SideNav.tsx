'use client'
import { useUser } from '@clerk/nextjs';
import React, { useState } from 'react';
import { LuBookmark, LuMessageSquare, LuSquareDashedBottomCode } from 'react-icons/lu';
import { RiNotification4Line } from "react-icons/ri";
import { MdAddBox, MdOutlineSettings } from 'react-icons/md';
import Link from 'next/link';

const SideNav = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  const getLinkClass = (link: string) => {
    return selectedLink === link ? 'text-green' : 'text-txt';
  };

  const getIconClass = (link: string) => {
    return selectedLink === link ? 'text-green' : 'text-txt';
  };
 
  const { user } = useUser();

  return (
    <div>
      <div>
        <div className={`flex items-center gap-[10px] ${getLinkClass('feed')}`} onClick={() => handleLinkClick('feed')}>
          <LuSquareDashedBottomCode className={`text-[32px] ${getIconClass('feed')}`} />
          <Link href='/feed'><h1 className='text-[20px] font-light'>Feed</h1></Link> 
        </div>
        <div className={`flex items-center gap-[10px] pt-[14px] ${getLinkClass('message')}`} onClick={() => handleLinkClick('message')}>
          <LuMessageSquare className={`text-[32px] ${getIconClass('message')}`} />
          <Link href='/message'><h1 className='text-[20px] font-light'>Message</h1></Link> 
        </div>
        <div className={`flex items-center gap-[10px] pt-[14px] pb-[14px] ${getLinkClass('bookmarks')}`} onClick={() => handleLinkClick('bookmarks')}>
          <LuBookmark className={`text-[32px] ${getIconClass('bookmarks')}`} />
          <Link href='/bookmarks'><h1 className='text-[20px] font-light'>Bookmarks</h1></Link>  
        </div>
        <hr className='w-full pb-[14px] border-dashed border-lite-txt ' />
      </div>
      <div>
        <div className={`flex items-center gap-[10px] ${getLinkClass('notification')}`} onClick={() => handleLinkClick('notification')}>
          <RiNotification4Line className={`text-[32px] ${getIconClass('notification')}`} />
          <Link href='/notification'><h1 className='text-[20px] font-light'>Notifications</h1></Link> 
        </div>
        <div className={`flex items-center gap-[10px] pt-[14px] ${getLinkClass('settings')}`} onClick={() => handleLinkClick('settings')}>
          <MdOutlineSettings className={`text-[32px] ${getIconClass('settings')}`} />
          <Link href='/settings'><h1 className='text-[20px] font-light'>Settings</h1></Link> 
        </div>
        <div className={`flex items-center gap-[10px] pt-[14px] pb-[14px] ${getLinkClass('post')}`} onClick={() => handleLinkClick('post')}>
          <MdAddBox className={`text-[32px] ${getIconClass('post')}`} />
          <Link href='/post'><h1 className='text-[20px] font-light'>Post</h1></Link> 
        </div>
        <hr className='w-full pb-[14px] border-dashed border-lite-txt ' />
      </div>
      <Link href={user ? '/profile' : '/sign-in'} className='flex gap-[14px] items-center'>
      {user ? (
        <>
          <img className='w-[38px] h-[38px] rounded-full' src='/Profile.png' />
          <h1 className='text-txt text-[20px] font-light'>{user.fullName}</h1>
        </>
      ) : (
        <p className='text-txt text-[20px] font-light'>Sign In</p>
      )}
    </Link>
    </div>
  )
}

export default SideNav;