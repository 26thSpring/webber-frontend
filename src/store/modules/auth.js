import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// 액션 타입 정의
const AUTH_NAVER = 'postWriter/AUTH_NAVER';
const INIT_AUTH = 'postWriter/INIT_AUTH';

export const authNaver = createAction(AUTH_NAVER);
export const initAuth = createAction(INIT_AUTH);

const initialState = Map({
   authState: 'false'
});

export default handleActions(
   {
      [AUTH_NAVER]: (state, action) => state.set('authState', action.payload),
      [INIT_AUTH]: (state, action) => state.set('authState', action.payload)
   },
   initialState
);
