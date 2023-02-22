import { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import { Nav } from '../Nav';
import { NavMobile } from '../NavMobile';
import { Social } from '../Social';

export function Header() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header className={`${bg ? "bg-header h-20" : 'h-24'} flex items-center fixed top-0 w-full text-#111 z-10 transition-all duration-300`}>
      <div className='container mx-auto h-full flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <a href="/">
            <img src={logo} width={50} alt="logo" />
          </a>
          <span className="text-[2rem] font-bold opacity-70">
            Cake Bakery
          </span>
        </div>
        <div className='hidden lg:block'>
          <Nav />
        </div>
        <div className='hidden lg:block'>
          <Social />
        </div>
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
