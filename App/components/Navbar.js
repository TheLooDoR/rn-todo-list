import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { THEME } from '../theme'
import { MyTextBold } from './ui/MyTextBold'

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <MyTextBold style={styles.navbarTitle}>My Todo App</MyTextBold>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
    marginBottom: 20,
  },
  navbarTitle: {
    fontSize: 24,
    color: '#fff',
  },
})
