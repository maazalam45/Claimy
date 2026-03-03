import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

export type PillOption<T extends string> = {
  key: T;
  label: string;
};

type PillsProps<T extends string> = {
  value: T | null;
  onChange: (value: T) => void;
  options: Array<PillOption<T>>;
};

export function Pills<T extends string>({ value, onChange, options }: PillsProps<T>) {
  return (
    <View style={styles.row}>
      {options.map(option => {
        const isActive = option.key === value;
        return (
          <Pressable
            key={option.key}
            accessibilityRole="button"
            onPress={() => onChange(option.key)}
            style={[styles.pill, isActive ? styles.pillActive : styles.pillInactive]}
          >
            <Text style={[styles.text, isActive ? styles.textActive : styles.textInactive]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  pill: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillActive: {
    backgroundColor: colors.white,
  },
  pillInactive: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  text: {
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  textActive: {
    color: colors.black,
  },
  textInactive: {
    color: colors.white,
  },
});
