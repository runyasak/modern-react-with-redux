// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import { axiosInstance } from './httpRequest';

const translateInstance = axiosInstance({
  baseURL: 'https://translation.googleapis.com/language/translate/v2',
  params: { key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM' },
});

// eslint-disable-next-line import/prefer-default-export
export const createTranslate = (params) => translateInstance.post('', {}, { params });
