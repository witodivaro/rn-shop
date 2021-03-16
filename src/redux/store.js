import {createStore, applyMiddleware} from 'redux';

import rootReducer from './root-reducer';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
