import fetch from 'cross-fetch';
import queryString from 'query-string';
import strictUriEncode from 'strict-uri-encode';
import { defaultParams, defaultHeaders } from '../lib/defaults';

export const REQUEST_MOVIES = 'FETCH_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export const requestMovies = () => {
  return {
    type: REQUEST_MOVIES,
    movies: [],
  };
};

export function receiveMovies(json, origin = 'discover') {
  return {
    type: RECEIVE_MOVIES,
    movies: json.results,
    origin,
    receivedAt: Date.now(),
  };
}

// Functions for Discover
export function fetchMovies() {
  return (dispatch) => {
    dispatch(requestMovies());

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
      .then((json) => dispatch(receiveMovies(json)));
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

export function fetchMoviesIfNeeded() {
  return (dispatch, getState) => {
    console.log(
      '[actions.js] fetchMoviesIfNeeded',
      shouldFetchMovies(getState())
    );
    if (shouldFetchMovies(getState())) {
      return dispatch(fetchMovies());
    }
  };
}

// Functions for search
export function fetchMoviesFromSearch(searchText) {
  return (dispatch) => {
    dispatch(requestMovies());

    //Query params for endPoint
    const params = {
      ...defaultParams,
      query: searchText,
    };

    //Endpoint complete URL
    const endPoint = `${
      process.env.REACT_APP_API_ENDPOINT
    }/search/movie?${queryString.stringify(params)}`;

    //Fetch data from API
    return fetch(`${endPoint}`, {
      method: 'GET',
      headers: {
        ...defaultHeaders,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        //if empty then return Discover
        console.log(json);
        if (json && json.results && json.results.length > 0) {
          dispatch(receiveMovies(json, 'search'));
        } else {
          dispatch(fetchMovies());
        }
      });
  };
}
