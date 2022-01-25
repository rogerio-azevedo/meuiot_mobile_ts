import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export const AuthRoutes: React.FC = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUp" component={SignUp} />
  </Navigator>
)
