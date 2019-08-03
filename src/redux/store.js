import { createStore, applyMiddleware } from "redux";
import createHistory from 'history/createBrowserHistory'
import logger from "redux-logger";


import rootReducer from './root-reducer'

export const history = createHistory()

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger));
  return store;
}