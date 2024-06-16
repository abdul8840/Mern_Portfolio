import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
  const path = useLocation().pathname; 

  return (
    <div className="border-b-2">
      <Navbar className='max-w-[1000px] mx-auto'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          Abdul
        </Link>
        <div className="flex gap-2 md:order-2">
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue'>
              Sign In
            </Button>
          </Link>

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse className="text-black md:flex md:items-center">
          <Navbar.Link className={path === '/' ? 'text-blue-500' : 'text-black'} as={'div'}>
            <Link to='/' className='block py-2 pr-4 pl-3 md:p-0'>Home</Link>
          </Navbar.Link>
          <Navbar.Link className={path === '/about' ? 'text-blue-500' : 'text-black'} as={'div'}>
            <Link to='/about' className='block py-2 pr-4 pl-3 md:p-0'>About</Link>
          </Navbar.Link>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
