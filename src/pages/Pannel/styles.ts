import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-size: ${RFPercentage(5)}px;
  font-family: 'Poppins-Regular';
  font-weight: 600;
`

export const Icon = styled(FontAwesome)`
  font-size: ${RFPercentage(10)}px;
`
