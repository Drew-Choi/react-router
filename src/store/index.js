import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';
import mbti from './modules/mbti';

export default combineReducers({
  todo,
  weightReducer,
  mbti,
});
