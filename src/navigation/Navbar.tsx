import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Navbar } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Link, scroller } from 'react-scroll';

export type NavbarProps = {
  // Prop types go here
  setOpenModal?: (value: boolean) => void;
};

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    link: {
      base: 'block py-2 md:p-0 text-white',
      active: {
        on: 'text-white dark:text-white md:bg-transparent md:text-white',
        off: 'border-b border-gray-100  text-white hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
      },
      disabled: {
        on: 'text-white hover:cursor-not-allowed dark:text-white',
        off: '',
      },
    },
  },
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  useEffect(() => {
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }, []);
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar
        className="px-4 md:px-16 md:py-6"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 40,
          top: 0,
          backgroundColor: '#1C46B3',
        }}
      >
        <Navbar.Brand href="#">
          {/* <img
            src="/fullLogo.png"
            className="h-8 lg:mr-3 lg:h-16"
            alt="Docta Mobile Logo"
          /> */}
          <h1 className="text-2xl font-bold text-white">Harvely</h1>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Link
            activeClass="text-white font-bold border-b-2 border-white"
            to="home"
            smooth
            spy
            offset={-200}
            className="text-white"
          >
            Accueil
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-white"
            to="about"
            smooth
            spy
            offset={-100}
            className="text-white"
          >
            A propos de nous
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-white"
            to="services"
            smooth
            spy
            className="text-white"
          >
            Nos services
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-white"
            to="team"
            smooth
            spy
            className="text-white"
          >
            Notre equipe
          </Link>
          <Link
            activeClass="text-white font-bold border-b-2 border-white"
            to="blog"
            smooth
            spy
            className="text-white"
          >
            Blog
          </Link>
          {/* <Link
            activeClass="text-secondary-900 font-bold border-b-2 border-secondary-900"
            to="pricing"
            smooth
            spy
            offset={-100}
            className="text-white"
          >
            Contact
          </Link> */}
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export { NavbarGlobal as Navbar };
