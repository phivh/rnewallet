import React, {forwardRef, useMemo} from 'react';
import {
  Keyboard,
  TextInput,
  StyleSheet,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors} from 'theme';

import Styles from './Style';
import {View, Text} from 'components';

export interface IInputProps extends Omit<TextInputProps, 'onChange'> {
  onChange?: (v: string) => void;
  label?: string;
  rightLabel?: string;
  color?: string;
  full?: boolean;
  dark?: boolean;
  marginRight?: number;
  leftIcon?: any;
  rightIcon?: any;
  rightIconStyle?: any;
  mask?: string;
  border?: boolean;
  PhoneComponent?: any;
  rightLabelStyle?: TextStyle | Array<TextStyle>;
  labelStyle?: TextStyle | Array<TextStyle>;
  containerStyle?: ViewStyle | Array<ViewStyle>;
  error?: {
    errorType?: string;
    errorMessage?: string | null;
  };
}

export const Input = forwardRef(
  (
    {
      style,
      color: _color,
      placeholderTextColor = Colors.dark,
      onChange,
      error,
      full,
      dark,
      label,
      rightLabel,
      marginRight,
      labelStyle,
      rightLabelStyle,
      leftIcon,
      rightIcon,
      rightIconStyle,
      testID,
      PhoneComponent,
      containerStyle,
      keyboardType = 'default',
      ...props
    }: IInputProps,
    ref,
  ) => {
    const color: string = useMemo(
      () => _color || Colors[dark ? 'dark' : 'white'],
      [dark, _color],
    );

    const styleDefault = StyleSheet.flatten([
      Styles.input,
      !!leftIcon && Styles.leftInput,
      !!PhoneComponent && [Styles.leftInput, Styles.leftInputWithPhone],
      !!rightIcon && Styles.rightInput,
      !props.value && Styles.none,
      {color},
      style,
    ]);

    const styleLabel = StyleSheet.flatten([
      Styles.label,
      {marginLeft: 4},
      labelStyle,
    ]);
    const styleRightLabel = StyleSheet.flatten([
      Styles.label,
      {marginRight: 4},
      rightLabelStyle,
    ]);

    return (
      <View style={[Styles.container, {marginRight}, full && Styles.full]}>
        <View row content="between">
          {!!label && <Text style={styleLabel}>{label}</Text>}
          {!!rightLabel && <Text style={styleRightLabel}>{rightLabel}</Text>}
        </View>
        <View row style={[Styles.content, containerStyle]}>
          {!!leftIcon && <View style={Styles.leftIcon}>{leftIcon}</View>}
          {!!PhoneComponent && (
            <View style={[Styles.leftIcon, Styles.leftIconWithPhone]}>
              <View style={Styles.phone}>{PhoneComponent()}</View>
            </View>
          )}
          <TextInput
            // @ts-ignore
            ref={ref}
            testID={testID}
            spellCheck={false}
            autoCapitalize="none"
            returnKeyType="next"
            blurOnSubmit={false}
            allowFontScaling={false}
            style={styleDefault as any}
            onSubmitEditing={Keyboard.dismiss}
            placeholderTextColor={placeholderTextColor}
            onChangeText={(v: string) => onChange && onChange(v)}
            keyboardType={keyboardType}
            value={props.value}
            {...props}
          />
          {!!rightIcon && (
            <View style={[Styles.rightIcon, rightIconStyle]}>{rightIcon}</View>
          )}
        </View>
        {error && error.errorMessage && (
          <Text style={Styles.inputError}>{error.errorMessage}</Text>
        )}
      </View>
    );
  },
);
