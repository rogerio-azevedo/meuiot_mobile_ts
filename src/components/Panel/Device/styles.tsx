import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 5,
    paddingRight: 10,
  },
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`

export const DeviceItem = styled.TouchableOpacity`
  width: 118px;
  height: 140px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 6px;
  margin-left: 10px;
  padding: 5px;
  align-items: center;
  border: 5px solid;
  border-color: #eee;
`

export const TabText = styled.Text`
  margin-top: 24px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.devide_text};
  text-align: center;
  font-weight: 600;
`
