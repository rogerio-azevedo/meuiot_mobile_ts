import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './global/styles/theme'
import { Pannel } from '../src/pages/Pannel'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Pannel />
    </ThemeProvider>
  )
}
