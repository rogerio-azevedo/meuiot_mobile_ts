import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react'

import { Alert } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../services/api'

interface Customer {
  id: number
  name: string
}

interface User {
  id: number
  name: string
  customer: Customer
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
  isRemember: boolean
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  loading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@MeuIOT:token',
        '@MeuIOT:user',
      ])

      if (token[1] && user[1]) {
        const parsedUser = JSON.parse(user[1])

        setData({
          token: token[1],
          user: parsedUser,
        })

        api.interceptors.response.use(
          response => {
            // Do something with response data
            return response
          },
          error => {
            // Do something with response error
            // You can even test for a response code
            // and try a new request before rejecting the promise

            if (
              error.request._hasError === true &&
              error.request._response.includes('connect')
            ) {
              Alert.alert(
                'Aviso',
                'Não foi possível conectar aos nossos servidores, sem conexão a internet',
                [{ text: 'OK' }],
                { cancelable: false },
              )
            }

            if (error.response.status === 401) {
              const requestConfig = error.config

              // O token JWT expirou
              // deleteUser().then(() => {
              //   navigate('AuthLoading', {})
              // })

              return api(requestConfig)
            }

            return Promise.reject(error)
          },
        )

        api.interceptors.request.use(config => {
          config.headers = {
            Authorization: `Bearer ${token[1]}`,
          }

          return config
        })
      }

      setLoading(false)
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    await AsyncStorage.multiSet([
      ['@MeuIOT:token', token],
      ['@MeuIOT:user', JSON.stringify(user)],
    ])

    api.interceptors.request.use(config => {
      config.headers = {
        Authorization: `Bearer ${token[1]}`,
      }

      return config
    })

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@MeuIOT:token', '@MeuIOT:user'])

    setData({} as AuthState)
  }, [])
  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }
