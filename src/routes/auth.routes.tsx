import React from 'react'
import { View, Text } from 'react-native'
//import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

//const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <View>
    <Text>Test</Text>
  </View>
  // <Auth.Navigator
  //   screenOptions={{
  //     headerShown: false,
  //     cardStyle: {
  //       backgroundColor: '#312e38',
  //     },
  //   }}>
  //   <Auth.Screen name="SignIn" component={SignIn} />
  //   <Auth.Screen name="SignUp" component={SignUp} />
  // </Auth.Navigator>
)

export default AuthRoutes
