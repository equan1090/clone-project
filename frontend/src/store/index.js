import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumReducer from './album';

import sessionReducer from './session';
import songReducer from './song';
import commentReducer from './comments';
import userReducer from './user';

const rootReducer = combineReducers({
  session: sessionReducer,
  albums: albumReducer,
  songs: songReducer,
  comments: commentReducer,
  users: userReducer
});
let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}



const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
