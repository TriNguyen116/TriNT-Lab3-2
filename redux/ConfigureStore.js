//store
// redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// reducers
import { leaders } from './leaders';
import { dishes } from './dishes';
import { comments } from './comments';
import { promotions } from './promotions';
import { favorites } from './favorites';
import {comment} from './comment';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ leaders, dishes, comments, promotions, favorites, comment }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

