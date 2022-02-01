import React from 'react'

import * as Styles from './styles'

export const DeviceCamera = ({ channel }: any) => {
  return (
    <Styles.Container>
      <Styles.CameraContainer>
        <Styles.MyWebView
          scalesPageToFit
          scrollEnabled={false}
          automaticallyAdjustContentInsets
          mediaPlaybackRequiresUserAction={true}
          androidLayerType="hardware"
          mixedContentMode="always"
          startInLoadingState={false}
          originWhitelist={['*']}
          source={{
            uri: 'http://peantonio.ddns.net:8081/cgi-bin/mjpg/video.cgi?channel=0&subtype=1',
          }}
        />
      </Styles.CameraContainer>
    </Styles.Container>
  )
}
