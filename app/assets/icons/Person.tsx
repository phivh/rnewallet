import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Person = ({fill = Colors.blue, ...props}: IIcon) => (
  <Svg width="14" height="18" viewBox="0 0 14 18" fill="none" {...props}>
    <Path
      d="M11 4C11 6.206 9.206 8 7 8C4.794 8 3 6.206 3 4C3 1.794 4.794 0 7 0C9.206 0 11 1.794 11 4ZM14 17C14 17.552 13.553 18 13 18H1C0.447 18 0 17.552 0 17C0 13.14 3.141 10 7 10C10.859 10 14 13.14 14 17Z"
      fill={fill}
    />
  </Svg>
);
