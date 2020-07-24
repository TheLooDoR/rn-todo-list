import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../types'

const handlers = {
  [ADD_ITEM]: (state, { title }) => {
    return {
      ...state,
      items: [
        ...state.items,
        {
          id: Date.now().toString(),
          title,
        },
      ],
    }
  },
  [UPDATE_ITEM]: (state, { id, title }) => {
    return {
      ...state,
      items: state.items.map((el) => {
        if (el.id === id) {
          el.title = title
        }
        return el
      }),
    }
  },
  [REMOVE_ITEM]: (state, { id }) => {
    return {
      ...state,
      items: state.items.filter((el) => el.id !== id),
    }
  },
  DEFAULT: (state) => state,
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}
