import styled from 'styled-components/native'
import { Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 0;
`

export const LogoContainer = styled.View`
  display: flex;
  width: 200px;
  height: 200px;
`

export const LogoImage = styled(Image)`
  width: 200px;
  height: 200px;
`

export const FieldsContainer = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Fields = styled.View`
  display: flex;
  flex: 1;
`

export const Actions = styled.View`
  display: flex;
  width: 100%;
  padding: 16px 0 ${16 + getBottomSpace()}px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'Poppins-Medium';
  margin: 24px 0 24px;
`

export const RememberContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const RememberText = styled.Text`
  color: #f4ede8;
  font-size: ${RFPercentage(2)}px;
  font-family: 'Poppins-Regular';
  margin-left: 8px;
`

export const ForgotPassword = styled.TouchableOpacity`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
`

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: ${RFPercentage(2)}px;
  font-family: 'Poppins-Regular';
`

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CreateAccountButtonText = styled.Text`
  color: #159957;
  font-size: 18px;
  font-family: 'Poppins-Regular';
  margin-left: 16px;
`
