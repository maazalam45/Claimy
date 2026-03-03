import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { AuthLayout } from '../components/AuthLayout';

type Props = NativeStackScreenProps<AuthStackParamList, 'VerificationIntro'>;

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

export function VerificationIntroScreen({ navigation }: Props) {
  return (
    <AuthLayout
      title="Verify You're Real"
      subtitle="Follow the instructions below"
      onBack={() => navigation.goBack()}
    >
      <View style={styles.card}>
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
      </View>

      <View style={styles.privacyBox}>
        <Text style={styles.privacyText}>Your images are private, encrypted, and securely stored.</Text>
      </View>

      <View style={styles.actions}>
        <AppButton
          label="Start Verification"
          onPress={() => navigation.navigate('Success')}
          variant="light"
          fullWidth
        />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
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
    marginTop: spacing.lg,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 214, 255, 0.12)',
    borderWidth: 1,
    borderColor: 'rgba(0, 214, 255, 0.14)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  privacyText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 12,
    textAlign: 'center',
  },
  actions: {
    marginTop: 'auto',
    gap: spacing.sm,
    paddingBottom: 30,
  },
});
