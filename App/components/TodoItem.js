import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { THEME } from '../theme'
import { MyText } from './ui/MyText'

export const TodoItem = ({ todoItem, index, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      onPress={() => onOpen(todoItem.id)}
      onLongPress={() => onRemove(todoItem.id)}
    >
      <View style={styles.todoItem}>
        <MyText style={styles.todoText}>{`${index + 1}. ${
          todoItem.title
        }`}</MyText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    padding: 15,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: THEME.MAIN_COLOR,
    borderRadius: 3,
    marginVertical: 5,
  },
  todoText: {
    fontSize: 20,
  },
})
