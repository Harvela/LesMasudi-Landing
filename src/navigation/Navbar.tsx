import { useMotionValueEvent, useScroll } from 'framer-motion';
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
      className={`fixed z-[1000] flex flex-row gap-5 px-8 py-6 md:px-16  ${otherStyle}`}
    >
      <button onClick={handleMenuToggle}>
        <MdMenu className="cursor-pointer text-white/90" size={40} />
      </button>

      <h1 className="text-[30px] text-white/90">Menu</h1>
      {isOpen && (
        <div className="absolute left-0 top-0 z-[1000] flex h-[100vh] w-[400px] flex-row justify-between bg-[#00172B] p-8">
          <div className="mt-12 flex flex-col gap-8">
            <a href="#home" className="text-lg font-medium text-white">
              Accueil
            </a>
            <a href="#about" className="text-lg font-medium text-white">
              A propos de nous
            </a>
            <a href="#service" className="text-lg font-medium text-white">
              Services
            </a>
            <a href="#galery" className="text-lg font-medium text-white">
              Gallerie
            </a>
            <a href="#team" className="text-lg font-medium text-white">
              Equipe
            </a>
            <a href="#blog" className="text-lg font-medium text-white">
              Blog
            </a>
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
