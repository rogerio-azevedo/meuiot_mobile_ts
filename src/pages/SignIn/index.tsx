import React, { useCallback, useRef } from 'react'
import * as RN from 'react-native'

import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

// import { useAuth } from '../../hooks/auth'

// import getValidationErrors from '../../utils/getValidationErrors'

import Background from '../../components/Background'
import logoImg from '../../assets/logo.png'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'

import * as Styles from './styles'

interface SignInFormData {
  email: string
  password: string
}

export const SignIn: React.FC = () => {
  const navigation = useNavigation()

  //const { signIn, user } = useAuth()

  return (
    <>
      <Background>
        <RN.KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={RN.Platform.OS === 'ios' ? 'padding' : undefined}
          enabled>
          <RN.ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flex: 1 }}>
            <Styles.Container>
              <Styles.LogoContainer>
                <Styles.LogoImage source={logoImg} />
              </Styles.LogoContainer>

              <RN.View>
                <Styles.Title>Faça seu Logon</Styles.Title>
              </RN.View>

              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="Email"
                returnKeyType="next"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />

              <Input
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />

              <Button title="Entrar" onPress={() => {}}>
                Entrar
              </Button>

              {/* <Form style={{ width: '100%' }}>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  name="email"
                  icon="mail"
                  placeholder="Email"
                  returnKeyType="next"
                />

                <Input
                  name="password"
                  icon="lock"
                  placeholder="Senha"
                  secureTextEntry
                  returnKeyType="send"
                />
                <Button>Entrar</Button>
              </Form> */}

              <Styles.ForgotPassword
                onPress={() => {
                  console.log('forgot')
                }}>
                <Styles.ForgotPasswordText>
                  Esqueci minha senha
                </Styles.ForgotPasswordText>
              </Styles.ForgotPassword>
            </Styles.Container>
          </RN.ScrollView>
        </RN.KeyboardAvoidingView>

        <Styles.CreateAccountButton
        //onPress={() => navigation.navigate('SignUp')}
        >
          <Icon name="log-in" size={20} color="#159957" />
          <Styles.CreateAccountButtonText>
            Criar uma conta
          </Styles.CreateAccountButtonText>
        </Styles.CreateAccountButton>
      </Background>
    </>
  )
}
