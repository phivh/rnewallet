import React from 'react';
import {Button, Container, Content, View} from 'components';
import {Dot, Person} from 'assets';
import {RefreshControl, SafeAreaView, StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';
import {Assets, Buttons, Wallet} from 'containers';
import {useAsset, useAuth} from 'hooks';

export const Home = () => {
  const {onGetAssets, loading} = useAsset();
  const {onLogout} = useAuth();
  return (
    <Container white loading={loading}>
      <SafeAreaView style={{flexGrow: 1}}>
        <View style={Styles.header}>
          <View row content="between">
            <Button
              style={Styles.account}
              titleStyle={Styles.accountTxt}
              title={'Ronnin Wallet'}
              icon={<Dot />}
            />
            <Button style={Styles.profile} title="" icon={<Person />} onPress={onLogout} />
          </View>
          <Wallet />
        </View>
        <Content
          scrollble
          // @ts-ignore
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onGetAssets} />
          }>
          <Buttons />
          <Assets />
        </Content>
      </SafeAreaView>
    </Container>
  );
};

const Styles = StyleSheet.create({
  header: {
    paddingHorizontal: Spacing.padding,
  },
  account: {
    backgroundColor: Colors.lighterGrey,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.default[0],
  },
  profile: {
    backgroundColor: Colors.lighterGrey,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.default[0],
  },
  accountTxt: {
    color: Colors.dark,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Spacing.default[0],
    fontSize: 12,
  },
});
