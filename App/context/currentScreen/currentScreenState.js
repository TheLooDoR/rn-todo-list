import React, { useReducer } from 'react'
import { CurrentScreenContext } from './currentScreenContext'
import { currentScreenReducer } from './currentScreenReducer'
import { CHANGE_SCREEN } from '../types'

export const CurrentScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(currentScreenReducer, null)

  const screenChange = (id) => dispatch({ type: CHANGE_SCREEN, payload: id })
  return (
    <CurrentScreenContext.Provider
      value={{
        itemId: state,
        screenChange,
      }}
    >
      {children}
    </CurrentScreenContext.Provider>
  )
}
