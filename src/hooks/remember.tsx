import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

interface RememberState {
  email: string
}

interface RememberCredentials {
  email: string
  isRemember: boolean
}

interface RememberContextData {
  remember: string
  setupRemember(credentials: RememberCredentials): Promise<void>
}

const RememberContext = createContext<RememberContextData>(
  {} as RememberContextData,
)

const RememberProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<RememberState>({} as RememberState)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const remember = await AsyncStorage.getItem('@MeuIOT:Remember')

      if (remember) {
        const parsed = JSON.parse(remember)
        setData(parsed)
      }
    }

    loadStorageData()
  }, [])

  const setupRemember = useCallback(async ({ email, isRemember }) => {
    if (isRemember) {
      await AsyncStorage.setItem(
        '@MeuIOT:Remember',
        JSON.stringify({ email: email }),
      )

      setData({ email: email })
    } else {
      await AsyncStorage.removeItem('@MeuIOT:Remember')

      setData({} as RememberState)
    }
  }, [])

  return (
    <RememberContext.Provider
      value={{
        remember: data.email,
        setupRemember,
      }}>
      {children}
    </RememberContext.Provider>
  )
}

const useRemember = (): RememberContextData => {
  const remContext = useContext(RememberContext)

  if (!remContext) {
    throw new Error('useAuth must be used within an RememberProvider')
  }
  return remContext
}

export { RememberProvider, useRemember }
