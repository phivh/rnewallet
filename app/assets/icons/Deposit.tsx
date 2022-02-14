import React from 'react';
import {Svg, Path, LinearGradient, Stop, Defs} from 'react-native-svg';
import {IIcon} from 'types';

export const Deposit = ({
  fill = 'url(#paint0_linear_1624_77)',
  ...props
}: IIcon) => (
  <Svg width="28" height="20" viewBox="0 0 28 20" fill="none" {...props}>
    <Path
      d="M24.6667 6H3.33334V4.66667C3.33334 3.932 3.93067 3.33333 4.66667 3.33333H23.3333C24.0693 3.33333 24.6667 3.932 24.6667 4.66667V6ZM20.6667 14H18C17.2667 14 16.6667 13.4 16.6667 12.6667C16.6667 11.9333 17.2667 11.3333 18 11.3333H20.6667C21.4 11.3333 22 11.9333 22 12.6667C22 13.4 21.4 14 20.6667 14ZM12.6667 14H7.33334C6.6 14 6 13.4 6 12.6667C6 11.9333 6.6 11.3333 7.33334 11.3333H12.6667C13.4 11.3333 14 11.9333 14 12.6667C14 13.4 13.4 14 12.6667 14ZM23.3333 0.666668H4.66667C2.46134 0.666668 0.666672 2.46133 0.666672 4.66667V15.3333C0.666672 17.5387 2.46134 19.3333 4.66667 19.3333H23.3333C25.5387 19.3333 27.3333 17.5387 27.3333 15.3333V4.66667C27.3333 2.46133 25.5387 0.666668 23.3333 0.666668Z"
      fill={fill}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1624_77"
        x1="27.3333"
        y1="0.666666"
        x2="-2.24583"
        y2="10.9806"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#1C94F4" />
        <Stop offset="1" stopColor="#1273EA" />
      </LinearGradient>
    </Defs>
  </Svg>
);
