import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {Colors} from 'theme';
import {IIcon} from 'types';

export const Logo = ({fill = Colors.white, ...props}: IIcon) => (
  <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.0432 0H3.96537C2.25403 0 0.866716 1.38731 0.866716 3.09865V27.3447C0.866716 28.5114 1.39262 29.616 2.2983 30.3515L13.5393 39.4801C14.3929 40.1733 15.6157 40.1733 16.4693 39.4801L27.7103 30.3515C28.616 29.616 29.1419 28.5114 29.1419 27.3447V3.09865C29.1419 1.38731 27.7546 0 26.0432 0ZM24.4938 6.97199C24.4938 5.68848 23.4533 4.648 22.1698 4.648H7.83854C6.55504 4.648 5.51455 5.68848 5.51455 6.97199V24.8707C5.51455 25.5378 5.80121 26.1727 6.30159 26.6139L12.1393 31.761L12.1394 18.9318H15.545C16.8285 18.9318 17.869 19.9723 17.869 21.2558L17.8689 31.761L23.7068 26.6139C24.2071 26.1727 24.4938 25.5378 24.4938 24.8707V20.1817L24.4931 20.1195C24.4605 18.5909 23.2271 17.3577 21.6983 17.3255L21.637 17.3249L21.6992 17.3242C23.2278 17.2916 24.461 16.0582 24.4931 14.5294L24.4938 14.4681V6.97199ZM12.1394 7.86186H17.869V12.6798C17.869 13.9633 16.8285 15.0038 15.545 15.0038H12.1394V7.86186Z"
      fill={fill}
    />
  </Svg>
);

export const LogoLarge = ({fill = Colors.blue, ...props}: IIcon) => (
  <Svg width="114" height="160" viewBox="0 0 114 160" fill="none" {...props}>
    <Path
      d="M12.8613 0H101.173C108.018 0 113.567 5.54925 113.567 12.3946V109.379C113.567 114.046 111.464 118.464 107.841 121.406L62.8772 157.92C59.4625 160.693 54.5716 160.693 51.1569 157.92L6.19302 121.406C2.57029 118.464 0.466675 114.046 0.466675 109.379V12.3946C0.466675 5.54925 6.01593 0 12.8613 0Z"
      fill={fill}
    />
    <Path
      d="M85.6796 18.5919C90.8136 18.5919 94.9755 22.7539 94.9755 27.8879V57.8724L94.9729 58.1177C94.8442 64.2328 89.9117 69.1664 83.797 69.2968L83.5485 69.2995L83.7937 69.3021C89.9088 69.4308 94.8424 74.3633 94.9729 80.478L94.9755 80.7265V99.4828C94.9755 102.151 93.8289 104.691 91.8274 106.456L68.4759 127.044L68.4762 85.0232C68.4762 79.8891 64.3143 75.7272 59.1803 75.7272H45.5579L45.5575 127.044L22.2067 106.456C20.2052 104.691 19.0586 102.151 19.0586 99.4828V27.8879C19.0586 22.7539 23.2205 18.5919 28.3545 18.5919H85.6796ZM68.4762 31.4474H45.5579V60.015H59.1803C64.3143 60.015 68.4762 55.8531 68.4762 50.719V31.4474Z"
      fill="white"
    />
  </Svg>
);
