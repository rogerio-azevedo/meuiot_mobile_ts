import React from 'react'
import { useAuth } from '../../hooks/auth'

import { Container, Title, Icon } from './styles'

export const Users: React.FC = () => {
  const { signOut, user } = useAuth()

  return (
    <Container>
      <Title>USERS</Title>
      <Icon name="users" size={60} color="#900" onPress={() => signOut()} />
    </Container>
  )
}
