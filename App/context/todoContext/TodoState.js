import React, { useReducer, useContext } from 'react'
import { Alert } from 'react-native'
import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../types'
import { CurrentScreenContext } from '../currentScreen/currentScreenContext'

export const TodoState = ({ children }) => {
  const initialState = {
    items: [
      { id: '1', title: 'Learn React Native' },
      { id: '2', title: 'Create application' },
    ],
  }
  const { screenChange } = useContext(CurrentScreenContext)
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const addItem = (title) =>
    dispatch({
      type: ADD_ITEM,
      title,
    })

  const updateItem = (id, title) =>
    dispatch({
      type: UPDATE_ITEM,
      id,
      title,
    })

  const removeItem = (id) => {
    const deleteItem = state.items.find((el) => el.id === id)
    Alert.alert(
      'Remove item',
      `Are you sure you want to delete item "${deleteItem.title}"`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
              screenChange(null)
              dispatch({
                  type: REMOVE_ITEM,
                  id,
              })
          },
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <TodoContext.Provider
      value={{
        items: state.items,
        addItem: addItem,
        updateItem: updateItem,
        removeItem: removeItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
