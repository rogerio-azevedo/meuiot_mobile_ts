import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
`

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const AvatarContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 70px;
  padding: 3px;
  margin-top: 20px;
  margin-right: 20px;
`

export const MenuContainer = styled.View`
  margin-top: 20px;
  margin-left: 20px;
`

export const WelcomeText = styled.Text`
  margin-top: 10px;
  margin-left: 20px;
  font-size: ${RFValue(16)}px;
  color: #fff;
  font-weight: 600;
  font-family: 'Poppins-Medium';
`
