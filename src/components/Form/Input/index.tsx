import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Container, MyInput, Icon } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: string
}

export const Input = ({ name, icon, ...rest }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const error = undefined

  return (
    <Container isFocused={isFocused} isErrored={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#159957' : '#eee'}
      />

      <MyInput {...rest} />
    </Container>
  )
}
