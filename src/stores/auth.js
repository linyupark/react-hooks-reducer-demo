
export const AUTH_SESS_NAME = '_AUTH_SESS_';
export const AUTH_SESS = JSON.parse(sessionStorage.getItem(AUTH_SESS_NAME) || '{}');
export default {
  token: '',
  signined: false,
  role: 'guest', 
  ...AUTH_SESS,
}