import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
  const path = useLocation().pathname; 

  return (
    <div className="border-b-2">
      <Navbar className='max-w-[1000px] mx-auto flex justify-between items-center'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          Abdul
        </Link>
        
        <div className="flex gap-2 md:order-2">
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="md:max-w-20 text-black md:flex md:items-center">
          <Navbar.Link active={path === '/'} as='div'>
            <Link to='/' className={path === '/' ? 'text-blue-500 block py-2 pr-4 pl-3 md:p-0' : 'text-black block py-2 pr-4 pl-3 md:p-0'}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as='div'>
            <Link to='/about' className={path === '/about' ? 'text-blue-500 block py-2 pr-4 pl-3 md:p-0' : 'text-black block py-2 pr-4 pl-3 md:p-0'}>About</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
