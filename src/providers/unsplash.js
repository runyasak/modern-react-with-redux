import { axiosInstance } from './httpRequest';

const UNSPLASH_ACCESS_KEY = 'Tog8oAYW6JR_QNVR5DGOS_lyjgGDsH8aEdSgJsMnS-k';

const unsplashInstance = axiosInstance({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});

// eslint-disable-next-line import/prefer-default-export
export const searchImages = (query) => unsplashInstance.get('/search/photos', { params: { query } });
