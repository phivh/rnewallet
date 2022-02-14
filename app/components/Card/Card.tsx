import React, { useCallback } from 'react';
import {StyleSheet} from 'react-native';
import {Copy, Logo} from 'assets';
import Clipboard from '@react-native-clipboard/clipboard';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import {Button, H1, H3, P, View} from 'components';
import {Colors, Spacing} from 'theme';
import i18n from 'translations';
import {IWallet} from 'types';
import {formatAccountNumber, formatCurrency} from 'utils';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const t = (key: string, opt?: any) => i18n.t(`screens.home.card.${key}`, opt);

export const Card = (item: Partial<IWallet>) => {
  const onCopy = useCallback(
    () => !!item?.account_number && Clipboard.setString(String(item.account_number)),
    [item],
  )
  
  return (
    <View style={Styles.card}>
      <LinearGradient
        angleCenter={{x: 0.5, y: 0.5}}
        useAngle
        angle={45}
        style={Styles.content}
        colors={[Colors.blue, '#1C94F4']}>
        <View row content="between">
          <ShimmerPlaceHolder visible={!!item.account_number}>
            <View row>
              <P white semiBold>
                {t('title')}
              </P>
              <P lightBlue style={Styles.accountNumber}>
                ({formatAccountNumber(String(item.account_number))})
              </P>
            </View>
          </ShimmerPlaceHolder>
          <Button onPress={onCopy} style={Styles.copy} title="" icon={<Copy />} />
        </View>
        <View style={Styles.divider} />
        <View>
          <H1 white bold style={Styles.balance}>
            {formatCurrency(Number(item.balance), item.currency || 'USD')}
          </H1>
          <H3 lightBlue>
            {formatCurrency(Number(item.balance) * Number(item.rate), 'VND')}
          </H3>
        </View>
        <Logo style={Styles.logo} />
      </LinearGradient>
    </View>
  );
};

const Styles = StyleSheet.create({
  card: {
    width: '100%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  content: {
    padding: Spacing.padding,
    borderRadius: Spacing.default[0],
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    right: Spacing.padding,
    bottom: Spacing.padding,
  },
  accountNumber: {
    marginLeft: Spacing.unit,
  },
  copy: {
    height: 'auto',
    padding: Spacing.unit,
    marginTop: -8,
  },
  divider: {
    height: 1,
    backgroundColor: '#68B8F8',
    marginTop: Spacing.default[1],
    marginBottom: Spacing.default[0],
  },
  balance: {
    marginBottom: Spacing.unit / 2,
  },
});
