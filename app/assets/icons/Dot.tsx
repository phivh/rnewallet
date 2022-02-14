import React from 'react';
import {Svg, Circle} from 'react-native-svg';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Dot = ({fill = Colors.blue, ...props}: IIcon) => (
  <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" {...props}>
    <Circle cx="4" cy="4" r="4" fill={fill} />
  </Svg>
);
