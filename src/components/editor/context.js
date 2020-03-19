
import React, { useReducer, createContext } from 'react';
import reducer from './reducer';

const EditorContext = createContext();

const EditorContextProvider = ({ value, children }) => {

  const [state, dispatch] = useReducer(reducer, value || []);

  return <EditorContext.Provider value={{ state, dispatch }}>
    {children}
  </EditorContext.Provider>

}

const EditorContextConsumer = EditorContext.Consumer;

export { EditorContext, EditorContextProvider, EditorContextConsumer };