import { combineReducers } from 'redux';
import editor from './editor';
import postWriter from './postWriter';

export default combineReducers({
   editor,
   postWriter
});
