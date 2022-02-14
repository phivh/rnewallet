import React, {useState} from 'react';
import {ImageBackground, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';
import {Button, Container, Content, H1, Input, P, View} from 'components';
import {Eye, Images, LogoLarge} from 'assets';
import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';
import i18n from 'translations';
import {useAuth} from 'hooks';


export const Login = () => {
  const {onLogin, error, loading} = useAuth();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Container white loading={loading}> 
        <KeyboardAvoidingView style={Styles.keyboardView} behavior={'padding'}>
        <Content padding={0} full content="center">
          <Content full scrollble bounces={false} content="center">
          <View align="center">
            <ImageBackground source={Images.loginBg} style={Styles.background}>
              <LogoLarge />
            </ImageBackground>
          </View>
          <View>
            <H1 style={Styles.title} bold center>
              {i18n.t('screens.login.title')}
            </H1>
            <P bold grey center>
              {i18n.t('screens.login.caption')}
            </P>
          </View>
          <View style={Styles.inputContainer}>
            <Input
              value={value}
              dark
              label={i18n.t('screens.login.inputLabel')}
              rightIcon={
                <TouchableOpacity onPress={() => setShow(s => !s)}>
                  <Eye fill={show ? Colors.blue : Colors.grey} />
                </TouchableOpacity>
              }
              rightIconStyle={Styles.icon}
              onChange={v => setValue(v)}
              secureTextEntry={!show}
              error={{errorMessage: error}}
            />
          </View>
          <Button
            disabled={loading}
            onPress={() => {
              onLogin({
                password: value,
              });
            }}
            gradientStyle={Styles.gradientStyle}
            gradient
            title={i18n.t('actions.unlock')}
          />
          </Content>
        </Content>
        </KeyboardAvoidingView>
    </Container>
  );
};

const Styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    justifyContent: 'center',
  },
  background: {
    paddingTop: Spacing.default[7],
    paddingBottom: Spacing.default[0],
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'center',
    width: 336,
  },
  title: {
    paddingTop: Spacing.default[1],
    paddingBottom: Spacing.default[0],
  },
  inputContainer: {
    paddingTop: Spacing.default[5],
    paddingBottom: 4,
  },
  gradientStyle: {
    width: 88,
  },
  icon: {
    zIndex: 10,
  },
});
