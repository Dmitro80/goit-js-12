const URL = 'https://pixabay.com/api/';
const API_KEY = '44774560-6cc9e3fc3beea571d43e1a675';

function searchImages(str) {
  return fetch(
    `${URL}?key=${API_KEY}&q=${encodeURIComponent(
      str
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { searchImages };
