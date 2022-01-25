import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(255,255,255, 0.1)
  border-radius: 10px;
  margin-bottom: 8px;
  border: rgba(255,255,255, 0.4)

  flex-direction: row;
  align-items: center;
`

export const MyInput = styled(TextInput)`
  flex: 1;
  color: #fff;
  font-size: ${RFValue(15)}px;
  font-family: 'Poppins-Medium';
`

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: #fff;
`
