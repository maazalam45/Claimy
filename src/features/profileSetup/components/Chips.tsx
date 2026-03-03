import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type ChipsProps = {
  values: string[];
  onToggle: (value: string) => void;
  options: string[];
};

export function Chips({ values, onToggle, options }: ChipsProps) {
  return (
    <View style={styles.wrap}>
      {options.map(option => {
        const isActive = values.includes(option);
        return (
          <Pressable
            key={option}
            accessibilityRole="button"
            onPress={() => onToggle(option)}
            style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
          >
            <Text style={[styles.text, isActive ? styles.textActive : styles.textInactive]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  chipActive: {
    backgroundColor: colors.white,
  },
  chipInactive: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  text: {
    fontSize: 13,
    fontWeight: '800',
  },
  textActive: {
    color: colors.black,
  },
  textInactive: {
    color: colors.white,
  },
});
