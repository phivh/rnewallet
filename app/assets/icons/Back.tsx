import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Back = ({fill = Colors.dark, ...props}: IIcon) => (
  <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      d="M5.3623 10C5.1003 10 4.8393 9.89801 4.6433 9.69501L0.780299 5.69501C0.402299 5.30201 0.407299 4.67901 0.793299 4.29301L4.7933 0.293006C5.1833 -0.0979941 5.8163 -0.0979941 6.2073 0.293006C6.5973 0.684006 6.5973 1.31601 6.2073 1.70701L2.9023 5.01201L6.0813 8.30501C6.4653 8.70301 6.4543 9.33601 6.0573 9.71901C5.8623 9.90701 5.6123 10 5.3623 10Z"
      fill={fill}
    />
  </Svg>
);
