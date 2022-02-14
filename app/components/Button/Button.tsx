import React, {ReactNode, useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableOpacity as Instance,
  StyleProp,
  TextStyle,
  Switch,
  SwitchProps,
} from 'react-native';
import Styles from './Style';
import {IIcon} from 'types';
import {Colors} from 'theme';
import {Text} from 'components';
import {Back, Close} from 'assets';
import LinearGradient from 'react-native-linear-gradient';

interface IButtonProps extends TouchableOpacityProps {
  shadow?: boolean;
  gradient?: boolean;
  underline?: boolean;
  vertical?: number;
  horizontal?: number;
  full?: boolean;
  style?: StyleProp<TextStyle>;
  gradientStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title: string;
  icon?: ReactNode;
}

const resetToContainer = () => ({
  margin: 0,
  elevation: 0,
  marginTop: 0,
  marginLeft: 0,
  marginRight: 0,
  marginBottom: 0,
  marginVertical: 0,
});

export const Button = ({
  shadow,
  vertical,
  horizontal,
  underline,
  style,
  titleStyle,
  title,
  icon,
  gradient,
  gradientStyle,
  disabled,
  ...props
}: IButtonProps) => {
  const _buttonStyle = StyleSheet.flatten([
    Styles.btn,
    style,
    shadow && Styles.shadow,
    !!horizontal && {marginHorizontal: horizontal},
    !!vertical && {marginVertical: vertical},
    !!disabled && {opacity: 0.5},
  ]);

  const isAndroid = useMemo(() => Platform.OS === 'android', []);

  const _titleStyle = StyleSheet.flatten([
    Styles.txt,
    underline && Styles.underline,
    titleStyle,
  ]);

  if (gradient) {
    return (
      <Instance
        {...props}
        disabled={disabled}
        style={[_buttonStyle, isAndroid && resetToContainer()]}>
        {icon}
        <LinearGradient
          style={[Styles.gradient, gradientStyle]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[Colors.blue, '#1C94F4']}>
          <Text style={_titleStyle}>{title}</Text>
        </LinearGradient>
      </Instance>
    );
  }

  return (
    <Instance
      {...props}
      style={[_buttonStyle, isAndroid && resetToContainer()]}>
      {icon}
      {!!title && <Text style={_titleStyle}>{title}</Text>}
    </Instance>
  );
};

export const BackButton = ({
  style,
  icon,
  iconProps,
  onPress,
  ...props
}: TouchableOpacityProps & {
  icon?: string | ReactNode;
  iconProps?: IIcon;
}) => {
  const navigation = useNavigation();
  const onIconPress = useCallback(() => navigation.goBack(), [navigation]);

  const defaultStyle = StyleSheet.flatten([
    {
      minWidth: 40,
      minHeight: 40,
      marginLeft: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    style,
  ]);

  const Icon = useMemo(
    () =>
      !icon ? (
        <Back {...iconProps} />
      ) : icon === 'close' ? (
        <Close {...iconProps} />
      ) : (
        icon
      ),
    [icon, iconProps],
  );

  return (
    <TouchableOpacity
      {...props}
      style={defaultStyle as any}
      onPress={onPress || onIconPress}>
      {Icon}
    </TouchableOpacity>
  );
};

export const SwitchButton = ({
  value = false,
  onPress,
  ...props
}: {onPress: (enable: boolean) => void} & SwitchProps) => {
  return (
    <Switch
      {...props}
      trackColor={{false: Colors.inactive, true: Colors.actice}}
      thumbColor={Colors.white}
      onValueChange={onPress}
      value={value}
    />
  );
};
