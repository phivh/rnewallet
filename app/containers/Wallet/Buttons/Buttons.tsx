import React from 'react';
import {View, Button, P} from 'components';
import {Deposit, Send, Swap} from 'assets';
import i18n from 'translations';
import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';
import {useWallet} from 'hooks';

const t = (key: string, opt?: any) => i18n.t(`screens.home.${key}`, opt);
export const Buttons = () => {
  const {onTransfer} = useWallet();
  return (
    <View style={Styles.container} row content="center">
      <View style={[Styles.btnContainer, Styles.disabled]} content="center">
        <Button disabled style={Styles.btn} title="" icon={<Deposit />} />
        <P center semiBold style={Styles.btnTxt}>
          {t('buttons.deposit')}
        </P>
      </View>
      <View style={Styles.btnContainer} content="center">
        <Button
          style={Styles.btn}
          title=""
          icon={<Send />}
          onPress={onTransfer}
        />
        <P center semiBold style={Styles.btnTxt}>
          {t('buttons.send')}
        </P>
      </View>
      <View style={[Styles.btnContainer, Styles.disabled]} content="center">
        <Button disabled style={Styles.btn} title="" icon={<Swap />} />
        <P center semiBold style={Styles.btnTxt}>
          {t('buttons.swap')}
        </P>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: Spacing.default[3],
  },
  btnContainer: {
    marginHorizontal: Spacing.padding,
  },
  btn: {
    padding: Spacing.unit,
    borderRadius: 8,
    backgroundColor: Colors.lighterGrey,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.unit / 2,
  },
  disabled: {
    opacity: 0.6,
  },
  btnTxt: {
    fontSize: 12,
  },
});
