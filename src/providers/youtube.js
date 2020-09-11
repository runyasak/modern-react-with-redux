import { axiosInstance } from './httpRequest';

const GOOGLE_API_KEY = 'AIzaSyC72wJnsMLrqn8a0oZZrWsWsc5zygfYn-Y';

const youtubeInstance = axiosInstance({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: GOOGLE_API_KEY,
  },
});

// eslint-disable-next-line import/prefer-default-export
export const searchVideos = (paramsValue) => {
  const params = {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    ...paramsValue,
  };

  return youtubeInstance.get('/search', { params });
};
