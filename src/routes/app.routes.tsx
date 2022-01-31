import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Panel } from '../pages/Panel'
import { Users } from '../pages/Users'

export type RootStackParamList = {
  Pannel: undefined
  Users: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

export function AppRoutes() {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#fff',
        tabBarActiveTintColor: theme.colors.danger,
        tabBarInactiveTintColor: theme.colors.text,
        headerStyle: {
          backgroundColor: '#155799',
        },
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 78 : 75,
          paddingTop: Platform.OS === 'ios' ? 15 : 15,
          paddingBottom: Platform.OS === 'ios' ? 25 : 15,
        },
      }}>
      <Screen
        name="Pannel"
        component={Panel}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="qrcode" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="users" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  )
}
