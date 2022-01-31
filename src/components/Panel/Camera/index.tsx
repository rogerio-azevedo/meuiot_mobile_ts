import React, { useState, useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import * as Styles from './styles'

export const SLIDER_WIDTH = Dimensions.get('window').width + 60
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

type ItemUrl = { url: string }

type ItemCamera = { item: ItemUrl; index: number }

export const Camera: React.FC = () => {
  const [entries, setEntries] = useState<ItemUrl[]>([])
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const isCarousel = useRef(null)
  const camRef = useRef(null)

  useEffect(() => {
    const data = [
      {
        url: 'http://peantonio.ddns.net:8081/cgi-bin/mjpg/video.cgi?channel=0&subtype=1',
      },
      {
        url: 'http://peantonio.ddns.net:8082/cgi-bin/mjpg/video.cgi?channel=0&subtype=1',
      },
      {
        url: 'http://peantonio.ddns.net:8083/cgi-bin/mjpg/video.cgi?channel=0&subtype=1',
      },
    ]

    setEntries(data)
  }, [])

  const CarouselCardItem = ({ item, index }: ItemCamera) => {
    return (
      <Styles.CameraContainer key={index}>
        <Styles.MyWebView
          ref={camRef}
          scalesPageToFit
          scrollEnabled={false}
          automaticallyAdjustContentInsets
          startInLoadingState={false}
          originWhitelist={['*']}
          source={{
            uri: item?.url,
          }}
        />
      </Styles.CameraContainer>
    )
  }

  return (
    <Styles.Container>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={entries}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setActiveSlide(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          paddingVertical: 10,
          //width: screenWidth,
        }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 50,
          marginHorizontal: 3,
          backgroundColor: '#fff',
        }}
        inactiveDotStyle={{
          backgroundColor: '#fff',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </Styles.Container>
  )
}
