import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

import { Weather } from '../../components/Panel/Weather'
import { DeviceCamera } from '../../components/Panel/DeviceCamera'
import { Device } from '../../components/Panel/Device'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Background from '../../components/Background'
import * as Styles from './styles'
import { useAuth } from '../../hooks/auth'

type DeviceType = {
  id: number
  name: string
  state: boolean
  type: string
}

type SwitchState = {
  type: string
  device: number
  state: boolean
}

export const Panel: React.FC = () => {
  const navigation = useNavigation()
  const { user } = useAuth()
  const [devices, setDevices] = useState<DeviceType[]>([])
  const [channel, setChannel] = useState<string>('')
  const [swhState, setSwtState] = useState<SwitchState>({} as SwitchState)

  //const customer = user?.customer?.id

  useEffect(() => {
    api
      .get('painel', { params: { cliente: 2 } })
      .then(response => {
        setChannel(response?.data?.channels[0]?.url)
        setDevices(response?.data?.devices)
        console.log(channel)
      })
      .catch(function (error) {
        console.log(
          'Houve um problema para carregar os dados: ' + error.message,
        )
      })
  }, [swhState])

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
        <DeviceCamera channel={channel} />
        <Device />
      </Styles.Container>
    </Background>
  )
}
