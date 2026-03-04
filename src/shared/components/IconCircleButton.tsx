import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BackIcon, ForwardIcon } from './AppIcons';
import { colors } from '../theme/colors';

type IconCircleButtonProps = {
  icon: string | ReactNode;
  onPress?: () => void;
  accessibilityLabel: string;
  size?: number;
};

export function IconCircleButton({ icon, onPress, accessibilityLabel, size = 36 }: IconCircleButtonProps) {
  const iconColor = 'rgba(255,255,255,0.85)';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={[styles.root, { width: size, height: size, borderRadius: size / 2 }]}
      hitSlop={10}
    >
      {typeof icon === 'string' ? (
        icon === '<' ? (
          <BackIcon size={18} color={iconColor} />
        ) : icon === '>' ? (
          <ForwardIcon size={16} color={iconColor} />
        ) : (
          <Text style={styles.text}>{icon}</Text>
        )
      ) : (
        <View>{icon}</View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.glass,
    borderWidth: 1,
    borderColor: colors.glassBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    fontWeight: '800',
  },
});
