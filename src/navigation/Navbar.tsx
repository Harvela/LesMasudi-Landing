import { useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md';

export type NavbarProps = {
  setOpenModal?: (value: boolean) => void;
};

const NavbarGlobal: React.FC<NavbarProps> = ({ setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    if (setOpenModal) {
      setOpenModal(!isOpen);
    }
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    if (setOpenModal) {
      setOpenModal(false);
    }
  };

  const { scrollY } = useScroll();
  const [otherStyle, setOtherStyle] = useState('');

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setOtherStyle('bg-blue w-full shadow-md');
    } else {
      setOtherStyle('');
    }
  });

  return (
    <div
      className={`fixed z-[1000] flex flex-row gap-5 px-8 py-6 md:px-16 ${otherStyle}`}
    >
      <button onClick={handleMenuToggle}>
        <MdMenu className="cursor-pointer text-white/90" size={40} />
      </button>

      <h1 className="text-[30px] text-white/90">Menu</h1>
      {isOpen && (
        <div className="absolute left-0 top-0 z-[1000] flex h-[100vh] w-[400px] flex-row justify-between bg-[#00172B] p-8">
          <div className="mt-12 flex flex-col gap-8">
            <Link
              href="/#home"
              className="text-lg font-medium text-white"
              onClick={handleCloseMenu}
            >
              Accueil
            </Link>
            <Link
              href="/#about"
              className="text-lg font-medium text-white"
              onClick={handleCloseMenu}
            >
              A propos de nous
            </Link>
            <Link
              href="/#service"
              className="text-lg font-medium text-white"
              onClick={handleCloseMenu}
            >
              Services
            </Link>
            <Link
              href="/#galery"
              className="text-lg font-medium text-white"
              onClick={handleCloseMenu}
            >
              Gallerie
            </Link>
            <Link
              href="/#team"
              className="text-lg font-medium text-white"
              onClick={handleCloseMenu}
            >
              Equipe
            </Link>
            <Link
              href="/#blog"
              className="text-lg font-medium text-white"
              onClick={handleCloseMenu}
            >
              Blog
            </Link>
          </div>
          <FaRegWindowClose
            onClick={handleCloseMenu}
            className="h-6 w-6 text-white"
          />
        </div>
      )}
    </div>
  );
};

export { NavbarGlobal as Navbar };
