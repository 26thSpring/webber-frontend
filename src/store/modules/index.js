import { combineReducers } from 'redux';
import editor from './editor';
import postWriter from './postWriter';
import postList from './postList';

export default combineReducers({
   editor,
   postWriter,
   postList
});
