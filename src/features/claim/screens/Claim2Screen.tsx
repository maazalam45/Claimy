import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'Claim2'>;

export function Claim2Screen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.hero}>
          <View style={styles.heroTop}>
            <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.heroBottom}>
            <Text style={styles.name}>Alexander Nate</Text>
            <Text style={styles.claimed}>Publicly Claimed</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Pressable onPress={() => navigation.navigate('PrivateClaimed')}>
            <GlassCard style={styles.relationshipCard}>
              <View style={styles.relationshipRow}>
                <View style={styles.relationshipLeft}>
                  <Text style={styles.cardLabel}>RELATIONSHIP STATUS</Text>
                  <Text style={styles.relationshipValue}>Single</Text>
                  <Text style={styles.relationshipHint}>Tap to view person  {'>'}</Text>
                </View>
                <View style={styles.relationshipBadge}>
                  <Text style={styles.relationshipBadgeText}>✿</Text>
                </View>
              </View>
            </GlassCard>
          </Pressable>

          <GlassCard style={styles.timeCard}>
            <View style={styles.timeHeader}>
              <Text style={styles.timeTitle}>Time Together</Text>
              <View style={styles.pills}>
                <View style={[styles.pill, styles.pillActive]}>
                  <Text style={[styles.pillText, styles.pillTextActive]}>2y</Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>4m</Text>
                </View>
                <View style={styles.pill}>
                  <Text style={styles.pillText}>12d</Text>
                </View>
              </View>
            </View>

            <View style={styles.timeline}>
              <View style={styles.timelineRow}>
                <Text style={styles.timelineDot}>◌</Text>
                <View style={styles.timelineText}>
                  <Text style={[styles.timelineTitle, styles.purple]}>Talking Stage</Text>
                  <Text style={styles.timelineDate}>Feb 14, 2021</Text>
                </View>
              </View>
              <View style={styles.timelineRow}>
                <Text style={styles.timelineDot}>✿</Text>
                <View style={styles.timelineText}>
                  <Text style={[styles.timelineTitle, styles.pink]}>Dating</Text>
                  <Text style={styles.timelineDate}>May 20, 2021</Text>
                </View>
              </View>
              <View style={styles.timelineRow}>
                <Text style={styles.timelineDot}>♥</Text>
                <View style={styles.timelineText}>
                  <Text style={[styles.timelineTitle, styles.red]}>In a Relationship</Text>
                  <Text style={styles.timelineDate}>Dec 10, 2022</Text>
                </View>
              </View>
            </View>
          </GlassCard>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  hero: {
    height: 320,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  heroTop: {
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.xl,
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
    gap: spacing.lg,
  },
  relationshipCard: {
    padding: spacing.lg,
    backgroundColor: 'rgba(255,47,179,0.10)',
    borderColor: 'rgba(255,47,179,0.16)',
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
    backgroundColor: 'rgba(255,47,179,0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255,47,179,0.22)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  relationshipBadgeText: {
    color: colors.primaryAlt,
    fontSize: 18,
    fontWeight: '900',
  },
  timeCard: {
    padding: spacing.lg,
  },
  timeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '800',
  },
  pills: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  pillActive: {
    backgroundColor: 'rgba(255,255,255,0.10)',
  },
  pillText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontWeight: '800',
  },
  pillTextActive: {
    color: colors.white,
  },
  timeline: {
    marginTop: spacing.md,
    gap: spacing.md,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  timelineDot: {
    width: 28,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '900',
  },
  timelineText: {
    gap: 2,
  },
  timelineTitle: {
    fontSize: 13,
    fontWeight: '900',
  },
  purple: { color: '#B15CFF' },
  pink: { color: '#FF2FB3' },
  red: { color: '#FF3B5C' },
  timelineDate: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 11,
  },
});
