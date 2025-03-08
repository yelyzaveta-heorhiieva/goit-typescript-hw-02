import axios from 'axios'

  const API_KEY = 'UlsZFFEIpTmOt-55LHmhQDmOdPRfqKB3lYwdH7klus0';
  const API = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

export const fetchImages = async <T extends object>(searchParam: string, searchPage: number): Promise<T> => {
const response = await axios.get<T>(API, {
  params: {
    query: searchParam,
    page: searchPage,
    per_page: 20,
    orientation: 'landscape',
  },
});
    return response.data;
}
