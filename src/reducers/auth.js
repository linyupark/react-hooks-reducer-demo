import { AUTH_SESS_NAME } from '@src/stores/auth';

export default (state, action) => {

  // 登录
  if (action.type === 'auth.login') {
    state = {
      ...state,
      signined: true
    };
  }

  // 更改角色
  if (action.type === 'auth.role') {
    state = {
      ...state,
      role: action.data
    };
  }

  sessionStorage.setItem(AUTH_SESS_NAME, JSON.stringify(state));

  return state;
}