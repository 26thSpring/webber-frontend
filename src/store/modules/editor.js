const MAKE_COMPONENT = 'editor/MAKE_COMPONENT';
const INSERT_COMPONENT = 'editor/INSERT_COMPONENT';
const CHANGE_CURRENT = 'editor/CHANGE_CURRENT';
const CHANGE_STYLES = 'editor/CHANGE_STYLES';

export const makeComponent = what => ({ type: MAKE_COMPONENT, what });
export const insertComponent = component => ({
   type: INSERT_COMPONENT,
   component
});
export const changeCurrent = () => ({ type: CHANGE_CURRENT });
export const changeStyles = styles => ({ type: CHANGE_STYLES, styles });

const initialState = {
   what: 'div',
   component: '',
   styles: {},
   currentComponent: ''
};

export default function editor(state = initialState, action) {
   switch (action.type) {
   case MAKE_COMPONENT:
      return {
         ...state,
         what: action.what
      };
   case INSERT_COMPONENT:
      return {
         ...state,
         component: action.component
      };
   case CHANGE_STYLES:
      return {
         ...state,
         styles: action.styles
      };
   default:
      return state;
   }
}
