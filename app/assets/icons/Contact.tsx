import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Contact = ({fill = Colors.lightGrey, ...props}: IIcon) => (
  <Svg width="18" height="20" viewBox="0 0 18 20" fill="none" {...props}>
    <Path
      d="M0 5V3H2V2C2 0.89 2.9 0 4 0H10V7L12.5 5.5L15 7V0H16C17.05 0 18 0.95 18 2V18C18 19.05 17.05 20 16 20H4C2.95 20 2 19.05 2 18V17H0V15H2V11H0V9H2V5H0ZM4 9H2V11H4V9ZM4 5V3H2V5H4ZM4 17V15H2V17H4Z"
      fill={fill}
    />
  </Svg>
);
