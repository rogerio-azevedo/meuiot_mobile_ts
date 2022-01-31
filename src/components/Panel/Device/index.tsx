import React, { useState, useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import api from '../../../services/api'

import { Container, DeviceItem, TabText } from './styles'

type SwitchState = {
  type: string
  device: number
  state: boolean
}

type ColorType = {
  id: number
  color: string
}

type DeviceType = {
  id: number
  name: string
  state: boolean
  type: string
}

export const Device: React.FC = () => {
  const [devices, setDevices] = useState<DeviceType[]>([])
  const [swhState, setSwtState] = useState<SwitchState>({} as SwitchState)
  const [borderColor, setBordercolor] = useState<ColorType>({
    id: 0,
    color: '#eee',
  })
  const [iconColor, setIconColor] = useState<ColorType>({
    id: 0,
    color: '#155799',
  })

  useEffect(() => {
    api
      .get('painel', {
        params: {
          cliente: 2,
          typ: swhState.type,
          dev: swhState.device,
          ste: swhState.state,
        },
      })
      .then(response => {
        setDevices(response.data?.devices)
      })
      .catch(function (error) {
        console.log(
          'Houve um problema para carregar os dados: ' + error.message,
        )
      })
  }, [swhState])

  const handleSwitch = (clicked: DeviceType): void => {
    if (clicked.type === 'mom' && !clicked.state === true) {
      setBordercolor({ id: clicked.id, color: '#159957' })
      setIconColor({ id: clicked.id, color: '#159957' })
      setTimeout(() => {
        setBordercolor({ id: clicked.id, color: '#eee' })
        setIconColor({ id: clicked.id, color: '#155799' })
      }, 800)
    }

    const swtc = {
      device: clicked.id,
      type: clicked.type,
      state: clicked.type === 'mom' ? true : !clicked.state,
    }

    setSwtState(swtc)
  }

  const resolveIconColor = (item: DeviceType): string => {
    if (item.type === 'mom' && item.id === iconColor.id) {
      return iconColor.color
    }
    if (item.type === 'ret' && item.state) {
      return '#34ac0d'
    }
    return '#155799'
  }

  const resolveBorderColor = (item: DeviceType): string => {
    if (item.type === 'mom' && item.id === borderColor.id) {
      return borderColor.color
    }
    if (item.type === 'ret' && item.state) {
      return '#34ac0d'
    }
    return '#eee'
  }

  return (
    <Container>
      {devices.map(item => (
        <DeviceItem
          key={item.id}
          style={{ borderColor: resolveBorderColor(item) }}
          onPress={() => {
            handleSwitch(item)
          }}>
          <MaterialIcons
            name={item.type === 'mom' ? 'drive-eta' : 'wb-incandescent'}
            size={65}
            color={resolveIconColor(item)}
            style={{ marginTop: 15 }}
          />
          <TabText>{item.name}</TabText>
        </DeviceItem>
      ))}
    </Container>
  )
}
