export default (state, action) => {
  // 合并配置
  if (action.type === 'config.merge') {
    return {...state, ...action.data};
  }
  return state;
}