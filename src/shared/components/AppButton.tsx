import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type AppButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'light' | 'dark';
  fullWidth?: boolean;
};

export function AppButton({ label, onPress, variant = 'primary', fullWidth = false }: AppButtonProps) {
  const isSecondary = variant === 'secondary';
  const isLight = variant === 'light';
  const isDark = variant === 'dark';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[
        styles.button,
        fullWidth && styles.buttonFullWidth,
        isSecondary && styles.buttonSecondary,
        isLight && styles.buttonLight,
        isDark && styles.buttonDark,
      ]}
    >
      <Text
        style={[
          styles.label,
          isSecondary && styles.labelSecondary,
          isLight && styles.labelLight,
          isDark && styles.labelDark,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  buttonLight: {
    backgroundColor: colors.white,
  },
  buttonDark: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  buttonFullWidth: {
    width: '100%',
  },
  label: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '600',
  },
  labelSecondary: {
    color: colors.text,
  },
  labelLight: {
    color: colors.black,
  },
  labelDark: {
    color: colors.white,
  },
});
