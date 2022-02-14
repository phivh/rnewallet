import React, {ReactNode} from 'react';
import {
  Modal as Instance,
  StyleSheet,
  ModalProps,
  ViewStyle,
} from 'react-native';
import {View} from 'components';
import {Colors} from 'theme';

interface IView extends ModalProps {
  paddingTop?: number | string;
  children?: ReactNode;
  visible: boolean;
  setVisible?: (v: boolean) => void;
}

export const Modal = ({
  children,
  style,
  paddingTop,
  visible = false,
  setVisible,
  ...props
}: IView) => {
  const modalDefaultStyle: ViewStyle = StyleSheet.flatten([
    {flex: 1, flexGrow: 1},
    style,
  ]);

  const modalContentStyle = StyleSheet.flatten([
    Styles.content,
    {paddingTop: paddingTop || 0},
  ]);

  return (
    <Instance {...props} style={modalDefaultStyle} visible={visible}>
      <View style={modalContentStyle}>
        <View
          style={Styles.overlay}
          // @ts-ignore
          onStartShouldSetResponder={setVisible}
        />
        {children}
      </View>
    </Instance>
  );
};

const Styles = StyleSheet.create({
  content: {
    flex: 1,
    flexGrow: 1,
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
    position: 'absolute',
    backgroundColor: Colors.white,
  },
});
