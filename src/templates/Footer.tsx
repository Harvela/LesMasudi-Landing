import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => (
  <footer className="flex flex-col items-center justify-center gap-4 bg-[#00172B] p-8 text-white dark:bg-gray-800 md:gap-8 md:p-16">
    <div className="flex flex-row items-center gap-8">
      <div className="rounded-full bg-white/80 p-3 text-black">
        <FaFacebook className="h-6 w-6" />
      </div>
      <div className="rounded-full bg-white/80 p-3 text-black">
        <FaInstagramSquare className="h-6 w-6" />
      </div>
      <div className="rounded-full bg-white/80 p-3 text-black">
        <FaTwitterSquare className="h-6 w-6" />
      </div>
    </div>

    <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:gap-16">
      <div className="flex flex-row items-center gap-2 md:gap-4">
        <h2 className="text-[12px] font-medium text-white/80 md:text-lg">
          Email:{' '}
        </h2>
        <a
          href="mailto:administration@lesmasudi.com"
          className="text-[12px] font-medium text-white/80 md:text-lg"
        >
          administration@lesmasudi.com
        </a>
      </div>

      <div className="flex flex-row items-center gap-2 md:gap-4">
        <h2 className="text-[12px] font-medium text-white/80 md:text-lg">
          Telephone:{' '}
        </h2>
        <div className="flex flex-row items-center gap-1 md:gap-2">
          <p className="text-[12px] font-medium text-white/80 md:text-lg">
            +243 973 849 944
          </p>
        </div>
      </div>
    </div>

    <div className="mt-8 flex flex-row items-center gap-4 md:gap-8">
      <a
        href="#home"
        className="text-[12px] font-medium text-white/80 md:text-lg"
      >
        Accueil
      </a>
      <a
        href="#about"
        className="text-[12px] font-medium text-white/80 md:text-lg"
      >
        A propos de nous
      </a>
      <a
        href="#service"
        className="text-[12px] font-medium text-white/80 md:text-lg"
      >
        Services
      </a>
      <a
        href="#galery"
        className="text-[12px] font-medium text-white/80 md:text-lg"
      >
        Gallerie
      </a>
      <a
        href="#team"
        className="text-[12px] font-medium text-white/80 md:text-lg"
      >
        Equipe
      </a>
      <a
        href="#blog"
        className="text-[12px] font-medium text-white/80 md:text-lg"
      >
        Blog
      </a>
    </div>
  </footer>
);

export { Footer };
