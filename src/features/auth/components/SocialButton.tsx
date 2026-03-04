import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type SocialButtonProps = {
  label: string;
  onPress: () => void;
  onLongPress?: () => void;
  tone?: 'light' | 'dark';
  icon?: ReactNode;
  iconText?: string;
};

export function SocialButton({
  label,
  onPress,
  onLongPress,
  tone = 'dark',
  icon,
  iconText,
}: SocialButtonProps) {
  const isLight = tone === 'light';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.base, isLight ? styles.light : styles.dark]}
    >
      <View style={styles.row}>
        {icon ?? null}
        {iconText ? <Text style={[styles.icon, isLight ? styles.iconLight : styles.iconDark]}>{iconText}</Text> : null}
        <Text style={[styles.text, isLight ? styles.textLight : styles.textDark]}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: '100%',
    borderRadius: 14,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    backgroundColor: colors.white,
  },
  dark: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  icon: {
    fontSize: 16,
    fontWeight: '800',
  },
  iconLight: {
    color: colors.black,
  },
  iconDark: {
    color: 'rgba(255,255,255,0.9)',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  textLight: {
    color: colors.black,
  },
  textDark: {
    color: colors.white,
  },
});
