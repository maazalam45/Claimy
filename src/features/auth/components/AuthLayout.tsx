import { PropsWithChildren, ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type AuthLayoutProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  rightAccessory?: ReactNode;
}>;

export function AuthLayout({
  title,
  subtitle,
  onBack,
  rightAccessory,
  children,
}: AuthLayoutProps) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.headerRow}>
          <View style={styles.headerSide}>
            {onBack ? (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Back"
                onPress={onBack}
                style={styles.iconCircle}
                hitSlop={10}
              >
                <Text style={styles.iconText}>{'<'}</Text>
              </Pressable>
            ) : null}
          </View>

          <View style={styles.headerCenter} />

          <View style={[styles.headerSide, styles.headerSideRight]}>
            {rightAccessory}
          </View>
        </View>

        {title ? <Text style={styles.title}>{title}</Text> : null}
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
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSide: {
    width: 64,
    alignItems: 'flex-start',
  },
  headerSideRight: {
    alignItems: 'flex-end',
  },
  headerCenter: {
    flex: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 16,
    fontWeight: '700',
  },
  title: {
    marginTop: spacing.sm,
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 12,
    color: 'rgba(255,255,255,0.55)',
    textAlign: 'center',
    lineHeight: 18,
  },
  content: {
    flex: 1,
    paddingTop: spacing.lg,
  },
});
