import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type ProfileSetupLayoutProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  onBack?: () => void;
}>;

export function ProfileSetupLayout({ title, subtitle, onBack, children }: ProfileSetupLayoutProps) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back"
            onPress={onBack}
            style={styles.back}
            hitSlop={10}
          >
            <Text style={styles.backText}>{'<'}</Text>
          </Pressable>
        ) : null}

        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}

        <View style={styles.content}>{children}</View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  back: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  backText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    fontWeight: '800',
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
    lineHeight: 18,
  },
  content: {
    flex: 1,
    marginTop: spacing.lg,
  },
});
