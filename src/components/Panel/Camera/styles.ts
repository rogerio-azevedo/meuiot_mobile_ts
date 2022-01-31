import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import { WebView } from 'react-native-webview'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
export const SLIDER_WIDTH = Dimensions.get('window').width + 60
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

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
  width: ${screenWidth * 0.79}px;
  background: rgba(255, 255, 255, 0.2);
`
