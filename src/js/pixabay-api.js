import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '44774560-6cc9e3fc3beea571d43e1a675';
async function searchImages({ q, page = 1, per_page } = {}) {
  return (
    await axios.get('/', {
      params: {
        key: API_KEY,
        q: encodeURIComponent(q),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
      },
    })
  ).data;
}

export { searchImages };
