'use client';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface PhotoPageProps {
  photos: { src: string; width: number; height: number }[];
  error?: string | null;
}

const Galery = ({ photos }: PhotoPageProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div id="galery" className="relative z-20 px-8 py-5 lg:px-16">
      <div className="rounded-md">
        <h1 className="mb-2 text-lg font-bold text-blue lg:text-xl">
          GALLERIE
        </h1>
        <div className="mb-5 h-[4px] w-[4%] bg-blue" />
        {/* <div className="my-16 grid grid-cols-2 gap-8 text-blue md:grid-cols-3">
          {galery.map((g, index) => (
            <img
              key={index}
              src={g.icon}
              alt=""
              className="h-[300px] w-[500px] object-cover"
            />
          ))}
        </div> */}
        <PhotoAlbum
          photos={photos}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setSelectedIndex(index)}
        />

        <Lightbox
          slides={photos}
          open={selectedIndex >= 0}
          index={selectedIndex}
          close={() => setSelectedIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};

export { Galery };
