import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { MyButton } from './ui/MyButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value)

  const cancelModal = () => {
    onCancel()
    setTitle(value)
  }

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        'Validation error',
        `Title must have at least 3 symbols.\nNow ${
          title.trim().length
        } symbol.`
      )
    } else {
      onSave(title)
    }
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Input item name"
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />

        <View style={styles.buttons}>
          <MyButton onPress={cancelModal} color={THEME.DANGER_COLOR}>
            Cancel
          </MyButton>
          <MyButton onPress={saveHandler}>Save</MyButton>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
