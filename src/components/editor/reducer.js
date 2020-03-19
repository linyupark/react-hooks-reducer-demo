
export default (state, action) => {
  if (action.type === 'editor.add') {
    return [action.text, ...state];
  }
  return state
}