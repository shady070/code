'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuSearch, LuMessageSquare, LuSquareDashedBottomCode } from 'react-icons/lu';
import { LiaCcDiscover } from 'react-icons/lia';
import { MdAddBox, MdOutlineSettings } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

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


  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-bg md:px-[30px] px-[14px] py-[18px] border-b border-dashed border-lite-txt transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <Image 
          src="/logo.svg"
          width={36}
          height={26}
          alt="Logo"
        />
        <div className="flex md:gap-[6px] gap-[14px] items-center text-[26px] md:text-[16px] font-extralight text-lite-txt">
          <Link className={getLinkClass('search')} onClick={() => handleLinkClick('search')}  href="#"><LuSearch className={getIconClass('search')} /></Link> 
          <Link className={getLinkClass('message')} onClick={() => handleLinkClick('message')}  href="/message"><LuMessageSquare className={`md:hidden ${getIconClass('message')}`} /></Link>  
          <input className="hidden md:block bg-transparent px-[2px]" type="text" placeholder="Search" />
        </div>
        <div className="hidden md:flex text-lite-txt md:text-[20px] md:gap-[38px] md:font-normal">
          <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-green duration-250" href="/resources">Resources</Link>
          <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-green duration-250" href="/discover">Discover</Link>
          <Link className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-green duration-250" href="/following">Following</Link>
        </div>
      </nav> 
      <div className="md:hidden align-baseline fixed bottom-0 w-[100%] bg-bg py-[14px] px-[26px] border-t border-dashed border-lite-txt">
        <div className="text-txt text-[28px] flex justify-between">
          <Link className={getLinkClass('feed')} onClick={() => handleLinkClick('feed')} href='/'><LuSquareDashedBottomCode className={getIconClass('feed')} /></Link> 
          <Link className={getLinkClass('discover')} onClick={() => handleLinkClick('discover')} href='/discover'><LiaCcDiscover className={getIconClass('discover')}  /></Link> 
          <Link className={getLinkClass('post')} onClick={() => handleLinkClick('post')} href='/post'><MdAddBox className={getIconClass('post')} /></Link> 
          <Link className={getLinkClass('setting')} onClick={() => handleLinkClick('setting')} href='/settings'><MdOutlineSettings className={getIconClass('setting')} /></Link> 
          <Link className={getLinkClass('profile')} onClick={() => handleLinkClick('profile')} href='/profile'><CgProfile className={getIconClass('profile')} /></Link> 
        </div>
      </div>
    </div>
  );
}

export default NavBar;