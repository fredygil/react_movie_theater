import { REQUEST_MOVIES, RECEIVE_MOVIES, SET_RATE_FILTER } from './actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  error: false,
  origin: 'discover',
  rate: 0,
};

function movies(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        movies: action.movies,
        lastUpdated: action.receivedAt,
        origin: action.origin,
      };
    case SET_RATE_FILTER:
      return {
        ...state,
        rate: action.rate,
      };

    default:
      return state;
  }
}

export default movies;
