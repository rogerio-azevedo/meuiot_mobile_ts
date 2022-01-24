import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Pannel } from '../pages/Pannel'
import { Users } from '../pages/Users'

const { Navigator, Screen } = createBottomTabNavigator()

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
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingVertical: Platform.OS === 'ios' ? 15 : 10,
        },
      }}>
      <Screen
        name="Pannel"
        component={Pannel}
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
