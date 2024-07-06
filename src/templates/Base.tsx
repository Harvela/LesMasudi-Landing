import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { About } from './About';
import { Blog } from './Blog';
import { Footer } from './Footer';
import { Galery } from './Galery';
import { Hero } from './Hero';
import { Options } from './Options';
import { Team } from './Team';

const Base = (props: any) => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <Hero />
      <About />
      <Options />
      <Galery photos={props.photos} />
      <Team />
      <Blog />
      <Footer />
    </div>
  );
};

export { Base };
