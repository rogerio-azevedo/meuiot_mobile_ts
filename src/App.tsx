import React from 'react'
import { StatusBar } from 'react-native'

import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './routes/app.routes'

import theme from './global/styles/theme'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
