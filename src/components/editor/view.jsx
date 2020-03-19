import React, { useContext } from 'react'

import { EditorContext } from './context'

const Editor = () => {
  const { state, dispatch } = useContext(EditorContext)

  return (
    <>
      {(state || []).map(content => (
        <p key={content + Math.random()}>{content}</p>
      ))}
      <button onClick={() => dispatch({ type: 'editor.add', text: 'hello' })}>
        add
      </button>
    </>
  )
}

export { Editor }
