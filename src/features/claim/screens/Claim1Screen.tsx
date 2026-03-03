import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'Claim1'>;

function SmallChip({ label }: { label: string }) {
  return (
    <View style={styles.smallChip}>
      <Text style={styles.smallChipText}>{label}</Text>
    </View>
  );
}

function SectionCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <GlassCard style={styles.sectionCard}>
      <Text style={styles.sectionCardTitle}>{title}</Text>
      <Text style={styles.sectionCardSub}>{subtitle}</Text>
    </GlassCard>
  );
}

export function Claim1Screen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Inori</Text>
            <Text style={styles.headerSub}>Publicly Claimed</Text>
          </View>
          <IconCircleButton icon="o" accessibilityLabel="Profile" />
        </View>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <GlassCard style={styles.heroCard}>
            <Text style={styles.heroCardTitle}>Shared Stories & Dreams</Text>
            <Text style={styles.heroCardSub}>
              A warm list of shared moments and dreams to deepen connection and understanding between two people.
            </Text>
          </GlassCard>

          <Text style={styles.sectionLabel}>UPCOMING DOCS</Text>
          <GlassCard style={styles.docCard}>
            <Text style={styles.docTitle}>Date Night</Text>
            <Text style={styles.docSub}>
              Plan something special together: movie, dinner, or even a walk. Tap to open and keep it simple.
            </Text>
            <View style={styles.docMeta}>
              <SmallChip label="3 min" />
              <SmallChip label="New" />
            </View>
          </GlassCard>

          <Text style={styles.sectionLabel}>FUTURE PLANS</Text>
          <View style={styles.futureRow}>
            <GlassCard style={styles.futureCard}>
              <Text style={styles.futureTitle}>Our Dream Future</Text>
              <View style={styles.futureThumb} />
            </GlassCard>
            <GlassCard style={styles.futureCard}>
              <Text style={styles.futureTitle}>What's the move?</Text>
              <View style={styles.futureThumb} />
            </GlassCard>
          </View>

          <SectionCard
            title="Silly Scenarios & Sweet Choices"
            subtitle="Pick between fun prompts to learn each other's preferences and play." 
          />
          <SectionCard
            title="Supporting Each Other's Well-being"
            subtitle="Build supportive habits together and stay connected." 
          />
          <SectionCard
            title="Quirky Questions for a Laugh"
            subtitle="Light questions that open up conversation and spark joy." 
          />
          <SectionCard
            title="Rekindling the Spark"
            subtitle="Prompts for romance, care, and meaning." 
          />

          <View style={styles.bottomPad} />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '900',
  },
  headerSub: {
    color: colors.whiteMuted,
    fontSize: 12,
    fontWeight: '600',
  },
  scroll: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    gap: spacing.lg,
  },
  heroCard: {
    padding: spacing.lg,
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  heroCardTitle: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
  },
  heroCardSub: {
    marginTop: spacing.sm,
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    lineHeight: 18,
  },
  sectionLabel: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  docCard: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  docTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  docSub: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    lineHeight: 18,
  },
  docMeta: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  smallChip: {
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  smallChipText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    fontWeight: '800',
  },
  futureRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  futureCard: {
    flex: 1,
    padding: spacing.md,
    gap: spacing.sm,
  },
  futureTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '900',
  },
  futureThumb: {
    height: 120,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  sectionCard: {
    padding: spacing.lg,
    gap: spacing.sm,
  },
  sectionCardTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  sectionCardSub: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    lineHeight: 18,
  },
  bottomPad: {
    height: 120,
  },
});
