import React from 'react'

import { useAuth } from '../../hooks/auth'

import { Container, Title, Icon } from './styles'

export const Pannel: React.FC = () => {
  const { user } = useAuth()

  console.log(user.name)

  return (
    <Container>
      <Title>MEU IOT</Title>
      <Icon name="qrcode" size={60} color="#900" />
    </Container>
  )
}
