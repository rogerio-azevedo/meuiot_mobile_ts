import React from 'react'

import { AuthProvider } from './auth'
import { RememberProvider } from './remember'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RememberProvider>{children}</RememberProvider>
  </AuthProvider>
)

export default AppProvider
