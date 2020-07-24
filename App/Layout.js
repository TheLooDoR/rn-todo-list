import React, { useState, useContext } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Navbar } from './components/Navbar'
import { MainScreen } from './screens/Main'
import { TodoScreen } from './screens/TodoScreen'
import { CurrentScreenContext } from './context/currentScreen/currentScreenContext'

export const Layout = () => {
  const { itemId } = useContext(CurrentScreenContext)

  return (
    <View style={styles.App}>
      <Navbar />
      <View style={styles.container}>
        {itemId ? <TodoScreen /> : <MainScreen />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
})
