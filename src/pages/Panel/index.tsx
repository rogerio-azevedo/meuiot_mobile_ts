import React from 'react'
import { useNavigation } from '@react-navigation/native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Weather } from '../../components/Panel/Weather'
import { Camera } from '../../components/Panel/Camera'
import { Device } from '../../components/Panel/Device'

import Background from '../../components/Background'
import * as Styles from './styles'
import { useAuth } from '../../hooks/auth'

export const Panel: React.FC = () => {
  const navigation = useNavigation()
  const { user } = useAuth()

  return (
    <Background>
      <Styles.Container>
        <Styles.HeaderContainer>
          <Styles.MenuContainer>
            <FontAwesome name="navicon" size={35} color="#fff" />
          </Styles.MenuContainer>
          <Styles.AvatarContainer onPress={() => navigation.navigate('SignUp')}>
            <FontAwesome name="user" size={35} color="#155799" />
          </Styles.AvatarContainer>
        </Styles.HeaderContainer>

        <Styles.WelcomeText>{`Olá, ${user.name}`}</Styles.WelcomeText>

        <Weather />

        <Camera />

        <Device />
      </Styles.Container>
    </Background>
  )
}
