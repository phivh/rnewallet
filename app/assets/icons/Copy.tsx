import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Copy = ({fill = Colors.white, ...props}: IIcon) => (
  <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" {...props}>
    <Path
      d="M4 6.66667V6C4 4.89733 4.89733 4 6 4H6.66667V1.778C6.66667 1.53267 6.46733 1.33333 6.222 1.33333H1.778C1.53267 1.33333 1.33333 1.53267 1.33333 1.778V6.222C1.33333 6.46733 1.53267 6.66667 1.778 6.66667H4ZM4 8H1.778C0.797333 8 0 7.20267 0 6.222V1.778C0 0.797333 0.797333 0 1.778 0H6.222C7.20267 0 8 0.797333 8 1.778V4H10C11.1027 4 12 4.89733 12 6V10C12 11.1027 11.1027 12 10 12H6C4.89733 12 4 11.1027 4 10V8ZM5.33333 6C5.33333 5.63267 5.63267 5.33333 6 5.33333H10C10.368 5.33333 10.6667 5.63267 10.6667 6V10C10.6667 10.3673 10.368 10.6667 10 10.6667H6C5.63267 10.6667 5.33333 10.3673 5.33333 10V6Z"
      fill={fill}
    />
  </Svg>
);