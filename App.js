import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { TodoState } from './App/context/todoContext/TodoState'
import { CurrentScreenState } from './App/context/currentScreen/currentScreenState'
import { Layout } from './App/Layout'

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(error) => console.log(error.message)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
    <CurrentScreenState>
      <TodoState>
        <Layout />
      </TodoState>
    </CurrentScreenState>
  )
}
