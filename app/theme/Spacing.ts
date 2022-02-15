import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const Spacing = {
  unit: 8,
  border: 1,
  screenWidth,
  screenHeight,
  padding: 20,
  inputPadding: 15,
  default: [12, 14, 16, 18, 20, 24, 30, 34, 36, 40, 48, 60, 72],
};
