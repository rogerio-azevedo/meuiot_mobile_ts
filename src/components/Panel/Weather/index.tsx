import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import axios from 'axios'

import { Container, TermometerText } from './styles'

export const Weather: React.FC = () => {
  const [temperature, setTemperature] = useState<number>(0)
  const [weather, setWeather] = useState<string>('')
  const [city, setCity] = useState<string>('')

  useEffect(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=Cuiaba&units=metric&lang=pt_br&appid=71d4c83f961e0eb2906183eea1ee6a04',
      )
      .then(response => {
        setTemperature(response.data?.main?.temp)
        setWeather(response.data?.weather[0]?.description)
        setCity(response.data?.name)
      })
      .catch(function (error) {
        console.log(
          'Houve um problema para carregar os dados: ' + error.message,
        )
      })
  }, [])

  return (
    <Container>
      <TermometerText>{`Em ${city}: ${temperature}°C - ${weather}`}</TermometerText>
    </Container>
  )
}
