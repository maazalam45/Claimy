import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { HomeStackParamList } from '../../../navigation/types';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { useSessionStore } from '../../../state/sessionStore';

function ActionCard({
  section,
  title,
  description,
  cta,
  tint,
  onPress,
}: {
  section: string;
  title: string;
  description: string;
  cta: string;
  tint?: 'pink' | 'none';
  onPress?: () => void;
}) {
  const tinted = tint === 'pink';
  return (
    <GlassCard
      style={[styles.card, tinted && styles.cardTintPink]}
    >
      <Text style={styles.section}>{section}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>

      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={styles.cta}
      >
        <Text style={styles.ctaText}>{cta}  {'>'}</Text>
      </Pressable>
    </GlassCard>
  );
}

function PreviewLink({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress} style={styles.previewLink}>
      <Text style={styles.previewLinkText}>{label}</Text>
    </Pressable>
  );
}

type Props = NativeStackScreenProps<HomeStackParamList, 'HomeAllCardTypes'>;

export function HomeAllCardTypesScreen({ navigation }: Props) {
  const isIdentityVerified = useSessionStore(state => state.isIdentityVerified);
  const isIdentityVerificationPending = useSessionStore(state => state.isIdentityVerificationPending);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Inori</Text>
            <Text style={styles.subtitle}>Claim your person</Text>
          </View>
          <IconCircleButton icon="o" accessibilityLabel="Profile" />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.stack}>
            <ActionCard
              section="VERIFICATION"
              title={
                isIdentityVerified
                  ? 'Identity Verified'
                  : isIdentityVerificationPending
                    ? 'Admin Verification Pending'
                    : 'Verify Identity'
              }
              description={
                isIdentityVerified
                  ? 'Great job. You are verified and full search is unlocked.'
                  : isIdentityVerificationPending
                    ? 'Manual review is in progress. This can take 24-48 hours.'
                    : 'Complete liveness check to unlock full search and verified badge.'
              }
              cta={isIdentityVerified ? 'Verified' : isIdentityVerificationPending ? 'In Review' : 'Verify Now'}
              onPress={
                isIdentityVerified || isIdentityVerificationPending
                  ? undefined
                  : () => navigation.navigate('VerifyReal')
              }
            />
            <ActionCard
              section="PROFILE SETUP"
              title="Complete Your Look"
              description="Add a profile photo to help your person recognize you when you connect."
              cta="Upload Photo"
              onPress={() =>
                navigation.getParent()?.navigate('ProfileTab' as never, { screen: 'Profile' } as never)
              }
            />
            <ActionCard
              section="ACTION REQUIRED"
              title="Claim Your Special Person"
              description="Does she/he mean a lot to you? Claim them now to start your exclusive 1:1 journey."
              cta="Claim My Person"
              tint="pink"
              onPress={() =>
                navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'Status' } as never)
              }
            />
          </View>

          <GlassCard style={styles.previewCard}>
            <Text style={styles.previewTitle}>PREVIEW ROUTES</Text>
            <View style={styles.previewGrid}>
              <PreviewLink label="Face Search" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'FaceSearch' } as never)} />
              <PreviewLink label="Scan QR" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'ScanQR' } as never)} />
              <PreviewLink label="Loading Ripple" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'LoadingRipple', params: { mode: 'face' } } as never)} />
              <PreviewLink label="Matches" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'Matches' } as never)} />
              <PreviewLink label="No Matches" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'NoMatches' } as never)} />
              <PreviewLink label="Premium" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'PremiumUpsell' } as never)} />
              <PreviewLink label="Purchase OK" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'PurchaseSuccess' } as never)} />
              <PreviewLink label="Purchase Error" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'PurchaseError' } as never)} />
              <PreviewLink label="Select Status" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'Status' } as never)} />
              <PreviewLink label="Claim QR" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'ClaimQRCode', params: { statusTitle: 'Talking Stage' } } as never)} />
              <PreviewLink label="Claim Profile" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'Claim2' } as never)} />
              <PreviewLink label="Claim Extended" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'ClaimExtended' } as never)} />
              <PreviewLink label="Insights Date" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'ClaimInsightsDate' } as never)} />
              <PreviewLink label="Insights Today" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'ClaimInsightsToday' } as never)} />
              <PreviewLink label="Status Change" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'StatusChangeModal' } as never)} />
              <PreviewLink label="Reminder" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'ReminderModal' } as never)} />
              <PreviewLink label="Privatise" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'PrivatiseModal' } as never)} />
              <PreviewLink label="Unclaim Modal" onPress={() => navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'UnclaimModal' } as never)} />
              <PreviewLink label="Chat Card Menu" onPress={() => navigation.getParent()?.navigate('ChatTab' as never, { screen: 'ChatCardOptions' } as never)} />
              <PreviewLink label="Your Answer" onPress={() => navigation.getParent()?.navigate('ChatTab' as never, { screen: 'ChatYourAnswer' } as never)} />
              <PreviewLink label="Report User" onPress={() => navigation.getParent()?.navigate('ChatTab' as never, { screen: 'ChatReport' } as never)} />
              <PreviewLink label="Hide Suggestion" onPress={() => navigation.getParent()?.navigate('ChatTab' as never, { screen: 'ChatHideSuggestion' } as never)} />
            </View>
          </GlassCard>
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  scrollContent: {
    paddingBottom: spacing.xl,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    gap: 6,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.whiteMuted,
    fontSize: 12,
  },
  stack: {
    marginTop: spacing.xl,
    gap: spacing.lg,
  },
  card: {
    padding: spacing.lg,
    gap: 8,
  },
  cardTintPink: {
    backgroundColor: 'rgba(255,47,179,0.10)',
    borderColor: 'rgba(255,47,179,0.16)',
  },
  section: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '900',
  },
  cardDesc: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    lineHeight: 18,
  },
  cta: {
    marginTop: spacing.sm,
    alignSelf: 'flex-start',
    borderRadius: 14,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  ctaText: {
    color: colors.black,
    fontSize: 12,
    fontWeight: '900',
  },
  previewCard: {
    marginTop: spacing.lg,
    padding: spacing.md,
  },
  previewTitle: {
    color: 'rgba(255,255,255,0.38)',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: spacing.sm,
  },
  previewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  previewLink: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  previewLinkText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
});
