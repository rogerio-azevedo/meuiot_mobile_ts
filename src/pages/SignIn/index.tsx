import React, { useCallback, useState } from 'react'
import * as RN from 'react-native'

import { useForm, Controller } from 'react-hook-form'

import { useAuth } from '../../hooks/auth'
import { useRemember } from '../../hooks/remember'

import Background from '../../components/Background'
import logoImg from '../../assets/logo.png'
import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'

import * as Styles from './styles'

interface SignInFormData {
  email: string
  password: string
  isRemember: boolean
}

export const SignIn: React.FC = () => {
  const { signIn } = useAuth()
  const { setupRemember, remember } = useRemember()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: remember ? remember : '',
      password: '',
      isRemember: remember ? true : false,
    },
  })
  const onSubmit = (data: SignInFormData) => handleSignIn(data)

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({
          email: data.email,
          password: data.password,
          isRemember: data.isRemember,
        })

        await setupRemember({
          email: data.email,
          isRemember: data.isRemember,
        })
      } catch (err) {
        RN.Alert.alert(
          'Erro na autenticação',
          'Não foi possivel fazer o login, Verifique seu email/senha',
        )
      }
    },
    [signIn],
  )

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

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    name="email"
                    onChangeText={onChange}
                    value={value}
                    autoCorrect={false}
                    onBlur={onBlur}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    icon="mail"
                    placeholder="Email"
                    returnKeyType="next"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                  />
                )}
                name="email"
              />
              {errors.email && <RN.Text>O email é obrigatório.</RN.Text>}

              <Controller
                control={control}
                rules={{
                  maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    name="password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    icon="lock"
                    placeholder="Senha"
                    secureTextEntry
                    returnKeyType="send"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                  />
                )}
                name="password"
              />

              <Styles.RememberContainer>
                <Controller
                  name="isRemember"
                  control={control}
                  rules={{
                    maxLength: 100,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <RN.Switch
                      style={{
                        transform: [
                          { scaleX: RN.Platform.OS === 'ios' ? 0.8 : 1.1 },
                          { scaleY: RN.Platform.OS === 'ios' ? 0.8 : 1.1 },
                        ],
                      }}
                      trackColor={{ false: '#767577', true: '#155799' }}
                      thumbColor={'#f4f3f4'}
                      ios_backgroundColor="#767577"
                      onValueChange={onChange}
                      value={value}
                    />
                  )}
                />

                <Styles.RememberText>Lembrar meu email</Styles.RememberText>
              </Styles.RememberContainer>

              <Button title="Entrar" onPress={handleSubmit(onSubmit)}>
                Entrar
              </Button>

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
      </Background>
    </>
  )
}
