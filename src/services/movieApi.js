import axios from 'axios';

const API_KEY = '9ef3e3eeb008aebbe13a5411b7b0eb81';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrending() {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMoviesByName(searchQuery) {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: searchQuery,
    page: 1,
  });
  try {
    const { data } = await axios.get(`search/movie?${searchParams}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieById(movieId) {
  try {
    const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(movieId) {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieReviews(movieId) {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
