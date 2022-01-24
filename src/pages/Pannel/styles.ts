import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Title = styled.Text`
  font-size: ${RFPercentage(5)}px;
  font-family: 'Poppins-Bold';
`
