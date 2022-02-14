import React from 'react';
import {H3, P, View} from 'components';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import {Colors, Spacing} from 'theme';
import {Images} from 'assets';
import {IAsset} from 'types';
import {formatCurrency} from 'utils';

interface IAssetItem {
  item: IAsset;
  disabled?: boolean;
  noMargin?: boolean;
  borderRadius?: boolean;
  onPress?: (item: IAsset) => void;
}
export const AssetItem = ({
  onPress,
  borderRadius = false,
  disabled = true,
  item,
  ...props
}: IAssetItem & ViewProps) => {
  return (
    <View {...props} style={[Styles.container]} full>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => (onPress ? onPress(item) : null)}>
        <View
          style={[
            Styles.itemContainer,
            borderRadius && Styles.borderRadius,
            !disabled && Styles.itemContainerWhite,
          ]}
          row
          align="center"
          content="start">
          <View style={Styles.iconContainer}>
            <Image
              // @ts-ignore
              source={Images.assets[item.currency]}
              style={Styles.icon}
              resizeMode="cover"
            />
          </View>
          <View>
            <H3 style={Styles.title}>
              {formatCurrency(Number(item.balance), item.currency)}
            </H3>
            <P grey small>
              {formatCurrency(Number(item.balance) * Number(item.rate), 'VND')}
            </P>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.unit,
    flex: 1,
  },
  noMargin: {
    marginVertical: 0,
  },
  itemContainer: {
    backgroundColor: Colors.lighterGrey,
    paddingHorizontal: Spacing.padding,
    paddingVertical: Spacing.default[0],
  },
  itemContainerWhite: {
    backgroundColor: Colors.white,
  },
  iconContainer: {
    borderRadius: 50,
    marginRight: Spacing.default[2],
  },
  borderRadius: {
    borderRadius: Spacing.unit,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    color: Colors.black,
    marginBottom: Spacing.unit / 2,
    fontWeight: '600',
  },
  button: {
    ...Platform.select({
      ios: {
        transform: [{scaleX: 0.7}, {scaleY: 0.7}],
      },
      android: {
        transform: [{scaleX: 1}, {scaleY: 1}],
      },
    }),
  },
});
