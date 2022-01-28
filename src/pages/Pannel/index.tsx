import React from 'react'

import { useAuth } from '../../hooks/auth'
import { useRemember } from '../../hooks/remember'

import { Container, Title, Icon } from './styles'

export const Pannel: React.FC = () => {
  const { signIn, user } = useAuth()
  const { remember } = useRemember()

  console.log(remember)

  return (
    <Container>
      <Title>MEU IOT</Title>
      <Icon name="qrcode" size={60} color="#900" />
    </Container>
  )
}
