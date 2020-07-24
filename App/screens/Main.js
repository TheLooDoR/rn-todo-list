import React, { useContext } from 'react'
import { FlatList, StyleSheet, View, Image, Text } from 'react-native'
import { AddItem } from '../components/AddItem'
import { TodoItem } from '../components/TodoItem'
import { MyTextBold } from '../components/ui/MyTextBold'
import { TodoContext } from '../context/todoContext/todoContext'
import { CurrentScreenContext } from '../context/currentScreen/currentScreenContext'

export const MainScreen = () => {
  const { addItem, items, removeItem } = useContext(TodoContext)
  const { screenChange } = useContext(CurrentScreenContext)

  return (
    <View style={styles.contentWrap}>
      <AddItem onSubmit={addItem} />

      {items.length ? (
        <FlatList
          keyExtractor={(item) => item.id}
          data={items}
          renderItem={({ item, index }) => (
            <TodoItem
              index={index}
              todoItem={item}
              onRemove={removeItem}
              onOpen={screenChange}
            />
          )}
        />
      ) : (
        <View style={styles.imgWrap}>
          <Image
            source={require('../../assets/empty-list.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <MyTextBold style={styles.emptyText}>List is empty :(</MyTextBold>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrap: {
    flex: 1,
  },
  imgWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    padding: 10,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  emptyText: {
    fontSize: 25,
  },
})
