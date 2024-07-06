import axios from 'axios';

import { Base } from '../templates/Base';

export default function Page(props: any) {
  return <Base {...props} />;
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(
      `${process.env.APP_LINK}/api/photo?folder=lesmasudi`,
    );

    const photos = res.data.photos.map((photo: any) => ({
      src: photo.url.replace('/upload/', '/upload/w_1080,f_auto/'),
      width: 1080,
      height: photo.height / (photo.width / 1080),
    }));

    return {
      props: {
        photos,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        photos: [],
        error: 'Failed to fetch photos',
      },
    };
  }
}
