const KEY = 'f792bc0e541efe7531ca1576bffe5aa2';

async function ErrorHandling(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export const getTrendingFilms = () => {
  return ErrorHandling(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);
};

export const searchFilms = query => {
  return ErrorHandling(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`);
};

export const getMovieDetails = id => {
  return ErrorHandling(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`);
};

export const getMovieCredits = id => {
  return ErrorHandling(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`);
};

export const getMovieReviews = id => {
  return ErrorHandling(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`);
};
