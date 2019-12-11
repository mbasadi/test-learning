import { combineReducers } from 'redux';
import PicReducer from './reducer_pic';
const rootReducer = combineReducers({
  pics:PicReducer
});

export default rootReducer;
