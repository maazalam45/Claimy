import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'Claim'>;

function InsightRow({ left, right }: { left: string; right: string }) {
  return (
    <GlassCard style={styles.insightRowCard}>
      <View style={styles.insightRow}>
        <Text style={styles.insightLeft}>{left}</Text>
        <Text style={styles.insightRight}>{right}</Text>
      </View>
    </GlassCard>
  );
}

export function ClaimScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.hero}>
            <View style={styles.heroTop}>
              <IconCircleButton icon="<" accessibilityLabel="Back" />
              <View style={styles.heroTopRight}>
                <Pressable accessibilityRole="button" style={styles.editPill} onPress={() => navigation.navigate('Claim1')}>
                  <Text style={styles.editText}>Edit</Text>
                </Pressable>
                <IconCircleButton icon="⚑" accessibilityLabel="Flag" />
              </View>
            </View>

            <View style={styles.heroBottom}>
              <Text style={styles.name}>Inori</Text>
              <Text style={styles.claimed}>Publicly Claimed</Text>
            </View>
          </View>

          <View style={styles.content}>
            <Pressable onPress={() => navigation.navigate('PrivatiseModal')}>
              <GlassCard style={styles.relationshipCard}>
                <View style={styles.relationshipRow}>
                  <View style={styles.relationshipLeft}>
                    <Text style={styles.cardLabel}>RELATIONSHIP STATUS</Text>
                    <Text style={styles.relationshipValue}>Single</Text>
                    <Text style={styles.relationshipHint}>Tap to upgrade claim</Text>
                  </View>
                  <View style={styles.relationshipBadge}>
                    <Text style={styles.relationshipBadgeText}>∞</Text>
                  </View>
                </View>
              </GlassCard>
            </Pressable>

            <Text style={styles.sectionTitle}>RELATIONSHIP INSIGHTS</Text>

            <View style={styles.insights}>
              <Pressable onPress={() => navigation.navigate('ClaimInsightsDate')}>
                <InsightRow left="Time Together" right="2y 4m 12d   >" />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('ReminderModal')}>
                <InsightRow left="Next Anniversary" right="12 days left   >" />
              </Pressable>
              <InsightRow left="Official Passport" right="View   >" />
            </View>

            <View style={styles.bottomPad} />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <AppButton
            label="Unclaim Person"
            onPress={() => navigation.navigate('UnclaimModal')}
            variant="dark"
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
  },
  hero: {
    height: 330,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  heroTop: {
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroTopRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  editPill: {
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  editText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '900',
  },
  heroBottom: {
    marginTop: 'auto',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
    gap: 4,
  },
  name: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '900',
  },
  claimed: {
    color: colors.whiteMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  relationshipCard: {
    padding: spacing.lg,
  },
  relationshipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  relationshipLeft: {
    flex: 1,
    gap: 6,
  },
  cardLabel: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  relationshipValue: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '900',
  },
  relationshipHint: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 12,
  },
  relationshipBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,176,32,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,176,32,0.20)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  relationshipBadgeText: {
    color: '#FFB020',
    fontSize: 18,
    fontWeight: '900',
  },
  sectionTitle: {
    marginTop: spacing.lg,
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  insights: {
    marginTop: spacing.sm,
    gap: spacing.sm,
  },
  insightRowCard: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  insightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  insightLeft: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  insightRight: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
    fontWeight: '800',
  },
  bottomPad: {
    height: 120,
  },
  footer: {
    position: 'absolute',
    left: spacing.xl,
    right: spacing.xl,
    bottom: 28,
  },
});
