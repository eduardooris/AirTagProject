import React from 'react';
import { StyleSheet, Text as TextView, StyleProp, TextStyle } from 'react-native';
import { DesignSystem } from '../../util/Style/DesignSystem';

interface TextProps {
  children: React.ReactNode;
  typography: 'small' | 'medium' | 'large';
  align?: 'center' | 'left' | 'right';
  style?: StyleProp<TextStyle>;
}

export const Text = ({ typography, align = 'left', style, children }: TextProps) => {
  return (
    <TextView
      allowFontScaling={false}
      style={[styles.text, style, typographyStyle[typography], aligns[align]]}>
      {children}
    </TextView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: DesignSystem.colors.secondary,
  },
  small: {
    fontSize: DesignSystem.typography.small,
    fontWeight: "400",
  },
  medium: {
    fontSize: DesignSystem.typography.medium,
    fontWeight: "500",
  },
  large: {
    fontSize: DesignSystem.typography.large,
    fontWeight: "700",
  },
  center: {
    textAlign: 'center',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
});

const aligns = {
  center: styles.center,
  left: styles.left,
  right: styles.right,
};

const typographyStyle = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};
