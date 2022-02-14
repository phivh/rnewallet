import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';

export default StyleSheet.create({
  btn: {
    borderRadius: Spacing.unit,
    alignSelf: 'center',
    borderWidth: 0,
    height: 40,
  },
  txt: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.white,
    textAlign: 'center',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  gradient: {
    borderRadius: Spacing.unit,
    justifyContent: 'center',
    alignConten: 'center',
    height: '100%',
  },
});
