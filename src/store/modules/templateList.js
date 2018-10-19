import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션 타입 정의
const MERGE_DATA = 'templateList/MERGE_DATA';
const TOGGLE_LIKE = 'templateList/TOGGLE_LIKE';
const INIT = 'templateList/INIT';

export const mergeData = createAction(MERGE_DATA);
export const toggleLike = createAction(TOGGLE_LIKE);
export const init = createAction(INIT);

const initialState = Map({
   data: false,
   templateList: List([])
});

export default handleActions(
   {
      [MERGE_DATA]: (state, action) =>
         state.set('templateList', action.payload),
      [INIT]: (state, action) => state.set('templateList', List())
   },
   initialState
);
