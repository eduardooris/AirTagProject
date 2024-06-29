import {combineReducers} from 'redux';
import dadosReducer from '../model/profile';
const rootReducer = combineReducers({
  dados: dadosReducer,
});

export default rootReducer;
