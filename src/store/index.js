import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';
import mbti from './modules/mbti';
import user from './modules/user';

export default combineReducers({
  todo,
  weightReducer,
  mbti,
  user,
});
