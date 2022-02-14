import {combineReducers} from 'redux';
import {assets} from './Assets';
import {auth} from './Auth';

const rootReducer = combineReducers({
  auth,
  assets,
});
export {rootReducer};
