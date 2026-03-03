import { Pressable, StyleSheet, Text } from 'react-native';

import { colors } from '../theme/colors';

type IconCircleButtonProps = {
  icon: string;
  onPress?: () => void;
  accessibilityLabel: string;
};

export function IconCircleButton({ icon, onPress, accessibilityLabel }: IconCircleButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      style={styles.root}
      hitSlop={10}
    >
      <Text style={styles.text}>{icon}</Text>
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
