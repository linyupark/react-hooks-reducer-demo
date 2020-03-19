import React, { useContext } from 'react'
// import AppGlobal from '@src/AppGlobal'

import { Editor, EditorContextProvider, EditorContext, EditorContextConsumer } from '@src/components/editor'

const AdminSwrFragment = () => {
  return (
    <EditorContextProvider value={['哈哈']}>
      <Editor />
      <div>use swr</div>
      <UseEditorContextDemo />
    </EditorContextProvider>
  )
}

const UseEditorContextDemo = () => {
  const { state } = useContext(EditorContext);
  return <div>
    {JSON.stringify(state)}
    <EditorContextConsumer>
      {({ state }) => <UseEditorContextConsumer list={state} />}
    </EditorContextConsumer>
  </div>
}

const UseEditorContextConsumer = ({ list }) => {
  return <ul>
    {list.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
}

export default AdminSwrFragment
