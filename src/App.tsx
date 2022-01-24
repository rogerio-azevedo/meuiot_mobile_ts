import React from 'react'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './routes/app.routes'

import theme from './global/styles/theme'
import { Pannel } from '../src/pages/Pannel'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}
