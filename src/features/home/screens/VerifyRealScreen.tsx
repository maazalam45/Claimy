import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { HomeStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<HomeStackParamList, 'VerifyReal'>;

function GuideRow({ color, title, subtitle }: { color: string; title: string; subtitle: string }) {
  return (
    <View style={styles.guideRow}>
      <View style={[styles.guideIcon, { borderColor: color }]}>
        <View style={[styles.guideDot, { backgroundColor: color }]} />
      </View>
      <View style={styles.guideTextCol}>
        <Text style={[styles.guideTitle, { color }]}>{title}</Text>
        <Text style={styles.guideSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

export function VerifyRealScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          <View style={styles.headerText}>
            <Text style={styles.title}>Verify You're Real</Text>
            <Text style={styles.subtitle}>Follow the instructions below</Text>
          </View>
        </View>

        <GlassCard style={styles.card}>
          <Text style={styles.cardTitle}>Quick Guide</Text>
          <Text style={styles.cardSubtitle}>We'll guide you through a quick liveness check</Text>

          <View style={styles.cardRows}>
            <GuideRow
              color="#FF3B5C"
              title="Move your face left and right"
              subtitle="Requires you to tilt your head"
            />
            <GuideRow
              color="#FFB020"
              title="Speak random numbers"
              subtitle="Enunciate numbers as clear as possible"
            />
            <GuideRow
              color="#34C759"
              title="Get verified instantly"
              subtitle="Our management team will manually review too"
            />
          </View>
        </GlassCard>

        <View style={styles.privacyBox}>
          <Text style={styles.privacyText}>Your images are private, encrypted, and securely stored.</Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Start Verification"
            onPress={() => navigation.navigate('LiveDetectionExample')}
            variant="light"
            fullWidth
          />
        </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerText: {
    gap: 2,
  },
  title: {
    color: colors.white,
    fontSize: 21,
    fontWeight: '900',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
  },
  card: {
    marginTop: spacing.lg,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(80,120,255,0.35)',
    padding: spacing.lg,
    gap: spacing.sm,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  cardSubtitle: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
    lineHeight: 18,
  },
  cardRows: {
    marginTop: spacing.sm,
    gap: spacing.md,
  },
  guideRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  guideIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  guideDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  guideTextCol: {
    flex: 1,
    gap: 2,
  },
  guideTitle: {
    fontSize: 13,
    fontWeight: '800',
  },
  guideSubtitle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 16,
  },
  privacyBox: {
    marginTop: 'auto',
    borderRadius: 12,
    backgroundColor: 'rgba(0, 214, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 214, 255, 0.20)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  privacyText: {
    color: 'rgba(140,245,255,0.95)',
    fontSize: 12,
    textAlign: 'center',
  },
  actions: {
    marginTop: spacing.lg,
    paddingBottom: 28,
  },
});
