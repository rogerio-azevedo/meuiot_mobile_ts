import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { WebView } from 'react-native-webview'

//const { width: screenWidth } = Dimensions.get('window')
export const screenWidth = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(screenWidth * 1)

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CameraContainer = styled.View`
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: ${ITEM_WIDTH * 0.69}px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  padding: 5px;
  box-shadow: 5px 2px 2px rgba(000, 000, 000, 0.5);
  elevation: 7;
`

export const MyWebView = styled(WebView)`
  display: flex;
  border-radius: 4px;
  width: ${screenWidth * 0.98}px;
  background: rgba(255, 255, 255, 0.2);
`
