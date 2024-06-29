import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { DesignSystem } from '../../util/Style/DesignSystem';
interface ButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export const Button = ({ onPress, disabled, size, children }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[style.button, disabled && style.disabled, sizes[size]]}
      onPress={onPress}
      disabled={disabled}>
      <Text allowFontScaling={false} style={style.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: DesignSystem.colors.secondary,
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: DesignSystem.colors.disabled,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  small: {
    width: 100,
  },
  medium: {
    width: 150,
  },
  large: {
    width: 200,
  },
});

const sizes = {
  small: style.small,
  medium: style.medium,
  large: style.large,
};
