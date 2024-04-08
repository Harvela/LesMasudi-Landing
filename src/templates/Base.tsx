import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Blog } from './Blog';
import { Footer } from './Footer';
import { Galery } from './Galery';
import { Hero } from './Hero';
import { Options } from './Options';
import { Services } from './Services';
import { Team } from './Team';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <Hero />
      <About />
      <Options />
      <Services />
      <Galery />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
};

export { Base };
