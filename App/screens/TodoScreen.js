import React, { useState, useContext } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
import { CardItem } from '../components/ui/CardItem'
import { EditModal } from '../components/EditModal'
import { MyTextBold } from '../components/ui/MyTextBold'
import { MyButton } from '../components/ui/MyButton'
import { TodoContext } from '../context/todoContext/todoContext'
import { CurrentScreenContext } from '../context/currentScreen/currentScreenContext'

export const TodoScreen = () => {
  const { items, updateItem, removeItem } = useContext(TodoContext)
  const { itemId, screenChange } = useContext(CurrentScreenContext)
  const [modal, setModal] = useState(false)

  const item = items.find((el) => el.id === itemId)

  const saveHandler = (title) => {
    updateItem(item.id, title)
    setModal(false)
  }

  return (
    <View>
      <EditModal
        visible={modal}
        onCancel={() => setModal(false)}
        value={item.title}
        onSave={saveHandler}
      />

      <CardItem style={styles.card}>
        <MyTextBold style={styles.title}>{item.title}</MyTextBold>
        <MyButton onPress={() => setModal(true)}>
          <FontAwesome5 name="edit" size={20} />
        </MyButton>
      </CardItem>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <MyButton color={THEME.GRAY_COLOR} onPress={() => screenChange(null)}>
            <AntDesign name="back" size={24} color="#fff" />
          </MyButton>
        </View>
        <View style={styles.button}>
          <MyButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeItem(item.id)}
          >
            <AntDesign name="delete" size={24} color="#fff" />
          </MyButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: Dimensions.get('window').width / 3,
  },
  title: {
    fontSize: 20,
  },
  card: {
    marginBottom: 20,
  },
})
