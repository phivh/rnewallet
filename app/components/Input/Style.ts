import {StyleSheet} from 'react-native';
import {Colors, Spacing} from 'theme';

export default StyleSheet.create({
  container: {
    padding: 0,
  },
  content: {
    height: 50,
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 2,
    borderColor: Colors.white,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontWeight: '400',
    borderColor: Colors.grey,
    borderWidth: 0.8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    color: Colors.dark,
    shadowColor: 'transparent',
  },
  none: {
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  full: {
    flex: 1,
  },
  inputError: {
    color: 'red',
    marginBottom: Spacing.unit,
  },
  label: {
    fontWeight: '700',
    color: Colors.lightGrey,
  },
  leftIcon: {
    top: 0,
    bottom: 0,
    width: 40,
    height: 40,
    left: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftInput: {
    paddingLeft: 35,
  },
  rightIcon: {
    top: 0,
    bottom: 0,
    width: 40,
    height: 40,
    right: 5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightInput: {
    paddingRight: 30,
  },
  picker: {
    height: 50,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: Colors.black,
    color: Colors.black,
    fontSize: 14,
    fontWeight: '700',
  },
  pickerAndroid: {
    height: 35,
    borderBottomWidth: 2,
    marginTop: 15,
    marginBottom: 0,
    borderColor: Colors.black,
    color: Colors.black,
  },
  viewContainer: {
    width: '100%',
    borderBottomWidth: 0,
  },
  placeHolder: {
    color: Colors.grey,
    fontSize: 16,
  },
  pickerIcon: {
    position: 'absolute',
    right: 0,
    top: '50%',
  },
  group: {
    marginTop: 30,
  },
  inputContent: {
    flex: 1,
    minHeight: 37,
    fontSize: 18,
    alignItems: 'center',
    fontWeight: 'bold',
    color: Colors.transparent,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  btnAddon: {
    width: 34,
    height: 34,
    padding: 0,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnDisabled: {
    opacity: 0.5,
  },
  txtAddon: {
    color: '#18766D',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  numberInput: {
    width: 140,
    alignItems: 'center',
    flexDirection: 'row',
  },
  loading: {
    position: 'absolute',
    top: 15,
    left: '70%',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  leftInputWithPhone: {
    paddingLeft: 50,
  },
  leftIconWithPhone: {
    width: 60,
    top: -13,
    zIndex: 10,
  },
  phone: {
    borderStyle: 'solid',
    paddingRight: 10,
  },
});
