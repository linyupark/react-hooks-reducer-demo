/**
 * 通用结合 Hooks跟Context 做状态管理
 */

import React, { createContext, useReducer, useContext } from 'react'

const Context = createContext()

const Provider = ({ reducer, initState, children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initState)}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer,
  Reducer: () => useContext(Context),
}
