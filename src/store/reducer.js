import { REQUEST_MOVIES, RECEIVE_MOVIES } from './actions';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  error: false,
  origin: 'discover',
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
    default:
      return state;
  }
}

export default movies;
