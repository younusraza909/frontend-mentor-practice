'use client';

import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <main className='max-w-7xl mx-auto max-xl:max-w-5xl max-lg:max-w-3xl max-md:px-10'>
      <div
        className={`bg-[#000] bg-opacity-50 z-10 w-full h-full absolute inset-0 ${
          mobileNav ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition duration-500 ease-in-out`}
      />

      <Navbar
        showMobileNav={mobileNav}
        handleToggleNav={(val) => setMobileNav(val)}
      />
    </main>
  );
}
