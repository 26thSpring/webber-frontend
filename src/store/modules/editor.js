import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import iassign from 'immutable-assign';

const TEXT_WRITE = 'editor/TEXT_WRITE';
const INSERT_COMPONENT = 'editor/INSERT_COMPONENT';
const CHANGE_CURRENT = 'editor/CHANGE_CURRENT';
const CHANGE_STYLE = 'editor/CHANGE_STYLE';
const MERGE_STYLE = 'editor/MERGE_STYLE';
const SET_INNER = 'editor/SET_INNER';

export const textWrite = createAction(TEXT_WRITE, what => what);
export const insertComponent = createAction(
   INSERT_COMPONENT,
   component => component
);
export const changeCurrent = createAction(CHANGE_CURRENT, text => text);
export const changeStyle = createAction(CHANGE_STYLE);
export const mergeStyle = createAction(MERGE_STYLE);
export const setInner = createAction(SET_INNER);

const initialState = Map({
   what: 'div',
   text: '',
   innerHTML: '',
   styles: Map({
      position: '',
      display: '',
      width: '',
      height: '',
      backgroundColor: '',
      color: '',
      border: '',
      margin: '',
      padding: '',
      flexDirection: '',
      justifyContent: '',
      alignItems: '',
      flexWrap: ''
   }),
   currentComponent: ''
});

export default handleActions(
   {
      [TEXT_WRITE]: (state, action) => state.set('text', action.payload),
      [INSERT_COMPONENT]: (state, action) =>
         state.set('innerHTML', action.payload),
      [CHANGE_CURRENT]: (state, action) =>
         state.set('currentComponent', action.payload),
      [CHANGE_STYLE]: (state, action) => {
         const data = action.payload;
         return state.setIn(['styles', data.attr], data.value);
      },
      [MERGE_STYLE]: (state, action) => {
         console.log('스토어--------------------');
         console.log(action.payload);
         console.log('스토어--------------------');
         return state.set('styles', Map(action.payload));
      },
      [SET_INNER]: (state, action) => {
         console.log(action.payload);
         return state.set('innerHTML', action.payload);
      }
   },
   initialState
);
