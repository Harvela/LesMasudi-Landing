import axiosParent from 'axios';

const axios = axiosParent.create({
  baseURL: 'https://admin.harvely.com',
  headers: {
    Authorization: `Bearer 11a14c1d30ff0df45a0927d24540f167afd77ee3cd08d763f8824dfcd762e7967264dc7bed933020dea538c6eda333eba342e1f3fdf5f9b7add055d43d45435fef7956ef26079dc39170e0bcdf146555b662cae8b880164c45d0942d75858e285545c2d5ade2bbac1815c279d5ee5da3aeb001a8e8b705041425970a19b11e04`,
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
