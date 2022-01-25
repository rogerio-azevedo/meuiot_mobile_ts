import React from 'react'
import { ButtonProps } from 'react-native'

import { Container, ButtonText } from './styles'

interface MyButtonProps extends ButtonProps {
  children: string
}

export const Button: React.FC<MyButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}
