import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

//Middleware
const logger = (store) => (next) => (action) => {
  console.log('[Middleware] Dispatching', action);
  const result = next(action);
  console.log('[Middleware] next state', store.getState());
  return result;
};

//Enable Redux devtools for Firefox
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configStore = (preloadState) =>
  createStore(
    reducer,
    preloadState,
    composeEnhancers(applyMiddleware(logger, thunk))
  );

export default configStore;
