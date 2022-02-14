import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Card} from 'components';
import {useAsset} from 'hooks';

export const Wallet = () => {
  const {walletInfo} = useAsset();
  return (
    <View testID="card">
      <View style={Styles.card}>
        <Card {...walletInfo} />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
});
