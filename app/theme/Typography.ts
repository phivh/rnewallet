import {StyleSheet} from 'react-native';

const sizePattern = {
  h0: 36,
  h1: 32,
  h2: 24,
  h3: 16,
  header: 14,
  medium: 16,
  base: 14,
  small: 12,
  xsmall: 10,
};

export const fontFamilies = {
  Primary: 'SF Pro Text',
};

export const Fonts = StyleSheet.create({
  h1: {
    fontSize: sizePattern.h1,
  },
  h2: {
    fontSize: sizePattern.h2,
    fontFamily: fontFamilies.Primary,
  },
  h3: {
    fontSize: sizePattern.h3,
    fontFamily: fontFamilies.Primary,
  },
  header: {
    fontSize: sizePattern.header,
    fontFamily: fontFamilies.Primary,
  },
  normal: {
    fontWeight: 'normal',
    fontSize: sizePattern.base,
  },
  medium: {
    fontWeight: 'normal',
    fontSize: sizePattern.medium,
  },
  small: {
    fontWeight: 'normal',
    fontSize: sizePattern.small,
  },
  xsmall: {
    fontWeight: 'normal',
    fontSize: sizePattern.xsmall,
  },
});
