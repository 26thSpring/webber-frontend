import { combineReducers } from 'redux';
import editor from './editor';
import postWriter from './postWriter';
import auth from './auth';

export default combineReducers({
   editor,
   postWriter
});
