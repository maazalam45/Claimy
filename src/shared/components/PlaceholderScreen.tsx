import { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppButton } from './AppButton';
import { Screen } from './Screen';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type PlaceholderAction = {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

type PlaceholderScreenProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  actions?: PlaceholderAction[];
}>;

export function PlaceholderScreen({
  title,
  subtitle = 'UI placeholder. Implement from the final UI image.',
  actions = [],
  children,
}: PlaceholderScreenProps) {
  return (
    <Screen>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {children}
      </View>
      {actions.length > 0 ? (
        <View style={styles.actions}>
          {actions.map(action => (
            <AppButton
              key={action.label}
              label={action.label}
              variant={action.variant}
              onPress={action.onPress}
            />
          ))}
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.sm,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    lineHeight: 24,
  },
  actions: {
    gap: spacing.sm,
  },
});
