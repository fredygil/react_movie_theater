import fetch from 'cross-fetch';
import queryString from 'query-string';
import { defaultParams, defaultHeaders } from '../lib/defaults';

export const REQUEST_MOVIES = 'FETCH_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const requestMovies = (searchText) => {
  return {
    type: REQUEST_MOVIES,
    searchText,
  };
};

export function receiveMovies(searchText, json) {
  return {
    type: RECEIVE_MOVIES,
    searchText,
    movies: json.results,
    receivedAt: Date.now(),
  };
}

export function fetchMovies(searchText) {
  console.log('[actions.js] fetchMovies', searchText);
  return (dispatch) => {
    dispatch(requestMovies(searchText));

    //Query params for endPoint
    const params = {
      ...defaultParams,
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
    };

    //Endpoint complete URL
    const endPoint = `${
      process.env.REACT_APP_API_ENDPOINT
    }/discover/movie?${queryString.stringify(params)}`;

    //Fetch data from API
    return fetch(`${endPoint}`, {
      method: 'GET',
      headers: {
        ...defaultHeaders,
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch(receiveMovies(searchText, json)));
  };
}

function shouldFetchMovies(state) {
  console.log('[actions.js] fetchMovies');

  const movies = state.movies;
  if (!movies) {
    return true;
  } else if (state.isFetching) {
    return false;
  } else {
    return state.didInvalidate;
  }
}

export function fetchMoviesIfNeeded(searchText) {
  return (dispatch, getState) => {
    console.log(
      '[actions.js] fetchMoviesIfNeeded',
      shouldFetchMovies(getState())
    );
    if (shouldFetchMovies(getState())) {
      return dispatch(fetchMovies(searchText));
    }
  };
}
