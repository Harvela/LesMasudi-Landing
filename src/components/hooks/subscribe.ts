import axiosParent from 'axios';

const axios = axiosParent.create({
  baseURL: 'https://admin.harvely.com',
  headers: {
    Authorization: `Bearer 1cfdb26a55c05fe4faf9f855466a8eef406b3d1aa2295f2b8f4c56d302c8ec7ad14b98e79045ceb386a32c35330e9ddf0c51a6758328116112cd14e3ddecf7f6594f2982f4ecc102bb00bed11caafc3bbd87410854fafb12759778bfbad5bb4b5411466e7238090c18050ebd588e41e4d81b1cafd99aa8132209593e5e1a6321`,
  },
});

interface Subscription {
  id: number;
  attributes: {
    Nom: string;
    PostNom: string;
    Prenom: string;
    Sexe: string;
    Niveau: string;
    Classe: string;
    Date_of_Birth: string;
    Place_of_Birth: string;
    School_origin: string;
    message: string;
  };
  // Add other properties of a passenger as needed
}

export const createSubscription = async (subscriptionData: Subscription) => {
  const payload = {
    data: subscriptionData,
  };

  const response = await axios.post('/api/inscriptions', payload);
  return response.data;
};

export const getArticles = async () => {
  const response = await axios.get(`/api/articles`, {
    params: {
      token: `Bearer ${window.localStorage.getItem('token')}`,
      sort: 'createdAt:asc',
      'populate[cover][populate]': '*',
      'pagination[page]': 1,
      'pagination[pageSize]': 6,
    },
  });
  return response.data;
};

export const getSingleArticle = async (id: string) => {
  const response = await axios.get(`/api/articles/${id}`, {
    params: {
      token: `Bearer ${window.localStorage.getItem('token')}`,
      sort: 'createdAt:asc',
      'populate[cover][populate]': '*',
      'pagination[page]': 1,
      'pagination[pageSize]': 6,
    },
  });
  return response.data;
};
