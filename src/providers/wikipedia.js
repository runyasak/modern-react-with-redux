import { axiosInstance } from './httpRequest';

const wikipediaInstance = axiosInstance({
  baseURL: 'https://en.wikipedia.org/w/api.php',
});

// eslint-disable-next-line import/prefer-default-export
export const searchWiki = (query) => wikipediaInstance.get('', {
  params: {
    action: 'query',
    list: 'search',
    origin: '*',
    format: 'json',
    srsearch: query,
  },
});
