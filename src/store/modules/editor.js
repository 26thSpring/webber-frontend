import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const MAKE_COMPONENT = 'editor/MAKE_COMPONENT';
const INSERT_COMPONENT = 'editor/INSERT_COMPONENT';
const CHANGE_CURRENT = 'editor/CHANGE_CURRENT';
const CHANGE_STYLES = 'editor/CHANGE_STYLES';

export const makeComponent = createAction(MAKE_COMPONENT, what => what);
export const insertComponent = createAction(
   INSERT_COMPONENT,
   component => component
);
export const changeCurrent = createAction(CHANGE_CURRENT, text => text);
export const changeStyles = createAction(CHANGE_STYLES, styles => styles);

const initialState = Map({
   what: 'div',
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
      padding: ''
   }),
   currentComponent: ''
});

export default handleActions(
   {
      [INSERT_COMPONENT]: (state, action) =>
         state.set('innerHTML', action.payload),
      [CHANGE_CURRENT]: (state, action) => state.set('styles', action.payload),
      [CHANGE_STYLES]: (state, action) =>
         state.set('styles', Map(...state.get('styles'), action.payload))
   },
   initialState
);
