import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = {
  counter,
};

export default combineReducers(rootReducer);
