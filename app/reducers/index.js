// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import main from './main';
const rootReducer = combineReducers({
  routing,
  main
});

export default rootReducer;
