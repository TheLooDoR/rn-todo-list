import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { THEME } from '../theme'
import { MyText } from './ui/MyText'

export const AddItem = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('')

  const pressHandler = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue)
      setInputValue('')
      Keyboard.dismiss()
    } else {
      //error
      Alert.alert('Validation error', 'Title cannot be empty!')
    }
  }

  return (
    <View style={styles.AddItem}>
      <TextInput
        style={styles.input}
        placeholder={'Input item name'}
        onChangeText={setInputValue}
        value={inputValue}
      />
      <Feather.Button
        style={styles.btn}
        backgroundColor={THEME.MAIN_COLOR}
        color={'#fff'}
        name="plus-circle"
        onPress={pressHandler}
        size={25}
      >
        <MyText style={styles.btnText}>Add</MyText>
      </Feather.Button>
    </View>
  )
}

const styles = StyleSheet.create({
  AddItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    fontSize: 20,
    flexGrow: 3,
    marginRight: 10,
  },
  btn: {
    flexGrow: 1,
  },
  btnText: {
    fontSize: 25,
    color: '#fff',
  },
})
