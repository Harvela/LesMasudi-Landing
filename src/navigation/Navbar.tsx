import React from 'react';
import { MdMenu } from 'react-icons/md';

export type NavbarProps = {
  // Prop types go here
  setOpenModal?: (value: boolean) => void;
};

const NavbarGlobal: React.FC<NavbarProps> = () => {
  // useEffect(() => {
  //   scroller.scrollTo('home', {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // }, []);
  return (
    <div className="fixed flex flex-row gap-5 px-16 pt-8">
      <MdMenu className="text-white/90" size={40} />
      <h1 className="text-[30px] text-white/90">Menu</h1>
    </div>
  );
};

export { NavbarGlobal as Navbar };
