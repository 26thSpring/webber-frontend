import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션 타입 정의
const MERGE_DATA = 'postList/MERGE_DATA';
const INIT = 'postList/INIT';

export const mergeData = createAction(MERGE_DATA);
export const init = createAction(INIT);

const initialState = Map({
   data: false,
   postList: List([])
});

export default handleActions(
   {
      [MERGE_DATA]: (state, action) => state.set('postList', action.payload),
      [INIT]: (state, action) => state.set('postList', List())
   },
   initialState
);
