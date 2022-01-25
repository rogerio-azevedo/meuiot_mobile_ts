import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  background: #159957;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`

export const ButtonText = styled.Text`
  font-family: 'Poppins-Medium';
  color: #fff;
  font-size: 18px;
`
