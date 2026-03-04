import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { HomeStackParamList } from '../../../navigation/types';
import { ActionRequiredSectionIcon, CameraSectionIcon, FaceSectionIcon, ForwardIcon, PersonOutlineIcon } from '../../../shared/components/AppIcons';
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
  sectionIcon,
  variant,
  onPress,
}: {
  section: string;
  title: string;
  description: string;
  cta: string;
  sectionIcon?: ReactNode;
  variant?: 'default' | 'action';
  onPress?: () => void;
}) {
  const isAction = variant === 'action';
  return (
    <View style={styles.cardBlock}>
      <View style={styles.sectionRow}>
        {sectionIcon ? <View style={styles.sectionIconWrap}>{sectionIcon}</View> : null}
        <Text style={styles.section}>{section}</Text>
      </View>

      <GlassCard style={[styles.card, isAction ? styles.cardAction : styles.cardDefault]}>
        <View style={styles.frostBase}>
          <View style={[styles.frostLayer, styles.frostLayerSoft]} />
          <View style={[styles.frostLayer, styles.frostLayerDark]} />
          <View style={[styles.frostLayer, isAction ? styles.frostLayerAction : styles.frostLayerDefault]} />
          <View style={[styles.cardMist, styles.cardMistLeft]} />
          <View style={[styles.cardMist, isAction ? styles.cardMistRightAction : styles.cardMistRightDefault]} />
        </View>
        <View style={styles.cardGlowBase}>
          <View style={[styles.cardGlowPrimary, isAction && styles.cardGlowAction]} />
        </View>
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDesc}>{description}</Text>
        </View>
        <Pressable accessibilityRole="button" onPress={onPress} style={styles.cta}>
          <Text style={styles.ctaText}>{cta}</Text>
          <ForwardIcon size={14} color="#0A0A0A" />
        </Pressable>
      </GlassCard>
    </View>
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
  const parentNavigation = navigation.getParent() as
    | {
        navigate: (tab: string, params?: unknown) => void;
      }
    | undefined;

  const navigateToClaimTab = (screen: string, params?: unknown) => {
    parentNavigation?.navigate('ClaimTab', params ? { screen, params } : { screen });
  };

  const navigateToChatTab = (screen: string, params?: unknown) => {
    parentNavigation?.navigate('ChatTab', params ? { screen, params } : { screen });
  };

  const navigateToProfileTab = (screen: string, params?: unknown) => {
    parentNavigation?.navigate('ProfileTab', params ? { screen, params } : { screen });
  };

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Inori</Text>
            <Text style={styles.subtitle}>Claim your person</Text>
          </View>
          <IconCircleButton
            icon={<PersonOutlineIcon size={28} color="#FFFFFF" />}
            accessibilityLabel="Profile"
            size={56}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.stack}>
            <ActionCard
              section="VERIFICATION"
              sectionIcon={<FaceSectionIcon size={14} color="#4C6EF5" />}
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
              variant="default"
              onPress={
                isIdentityVerified || isIdentityVerificationPending
                  ? undefined
                  : () => navigation.navigate('VerifyReal')
              }
            />
            <ActionCard
              section="PROFILE SETUP"
              sectionIcon={<CameraSectionIcon size={14} color="#FFFFFF" />}
              title="Complete Your Look"
              description="Add a profile photo to help your person recognize you when you connect."
              cta="Upload Photo"
              variant="default"
              onPress={() => navigateToProfileTab('Profile')}
            />
            <ActionCard
              section="ACTION REQUIRED"
              sectionIcon={<ActionRequiredSectionIcon size={14} color="#FF0080" />}
              title="Claim Your Special Person"
              description="Does she/he mean a lot to you? Claim them now to start your exclusive 1:1 journey."
              cta="Claim My Person"
              variant="action"
              onPress={() => navigateToClaimTab('Status')}
            />
          </View>

          <GlassCard style={styles.previewCard}>
            <Text style={styles.previewTitle}>PREVIEW ROUTES</Text>
            <View style={styles.previewGrid}>
              <PreviewLink label="Face Search" onPress={() => navigateToClaimTab('FaceSearch')} />
              <PreviewLink label="Scan QR" onPress={() => navigateToClaimTab('ScanQR')} />
              <PreviewLink label="Loading Ripple" onPress={() => navigateToClaimTab('LoadingRipple', { mode: 'face' })} />
              <PreviewLink label="Matches" onPress={() => navigateToClaimTab('Matches')} />
              <PreviewLink label="No Matches" onPress={() => navigateToClaimTab('NoMatches')} />
              <PreviewLink label="Premium" onPress={() => navigateToClaimTab('PremiumUpsell')} />
              <PreviewLink label="Purchase OK" onPress={() => navigateToClaimTab('PurchaseSuccess')} />
              <PreviewLink label="Purchase Error" onPress={() => navigateToClaimTab('PurchaseError')} />
              <PreviewLink label="Select Status" onPress={() => navigateToClaimTab('Status')} />
              <PreviewLink label="Claim QR" onPress={() => navigateToClaimTab('ClaimQRCode', { statusTitle: 'Talking Stage' })} />
              <PreviewLink label="Claim Profile" onPress={() => navigateToClaimTab('Claim2')} />
              <PreviewLink label="Claim Extended" onPress={() => navigateToClaimTab('ClaimExtended')} />
              <PreviewLink label="Insights Date" onPress={() => navigateToClaimTab('ClaimInsightsDate')} />
              <PreviewLink label="Insights Today" onPress={() => navigateToClaimTab('ClaimInsightsToday')} />
              <PreviewLink label="Status Change" onPress={() => navigateToClaimTab('StatusChangeModal')} />
              <PreviewLink label="Reminder" onPress={() => navigateToClaimTab('ReminderModal')} />
              <PreviewLink label="Privatise" onPress={() => navigateToClaimTab('PrivatiseModal')} />
              <PreviewLink label="Unclaim Modal" onPress={() => navigateToClaimTab('UnclaimModal')} />
              <PreviewLink label="Chat Card Menu" onPress={() => navigateToChatTab('ChatCardOptions')} />
              <PreviewLink label="Your Answer" onPress={() => navigateToChatTab('ChatYourAnswer')} />
              <PreviewLink label="Report User" onPress={() => navigateToChatTab('ChatReport')} />
              <PreviewLink label="Hide Suggestion" onPress={() => navigateToChatTab('ChatHideSuggestion')} />
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
  cardBlock: {
    gap: 10,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionIconWrap: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    minHeight: 196,
    padding: 16,
    justifyContent: 'space-between',
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardDefault: {
    backgroundColor: '#161516',
    borderColor: 'rgba(31, 41, 82, 1)',
  },
  cardAction: {
    backgroundColor: '#11131F',
    borderColor: 'rgba(37, 37, 37, 1)',
  },
  cardGlowBase: {
    ...StyleSheet.absoluteFill,
  },
  frostBase: {
    ...StyleSheet.absoluteFill,
  },
  frostLayer: {
    ...StyleSheet.absoluteFill,
  },
  frostLayerSoft: {
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  frostLayerDark: {
    backgroundColor: 'rgba(0,0,0,0.24)',
  },
  frostLayerDefault: {
    backgroundColor: 'rgba(22,21,22,0.08)',
  },
  frostLayerAction: {
    backgroundColor: 'rgba(26,16,22,0.26)',
  },
  cardMist: {
    position: 'absolute',
    borderRadius: 220,
    backgroundColor: '#D7D7D7',
    opacity: 0.08,
  },
  cardMistLeft: {
    left: -120,
    top: 10,
    width: 220,
    height: 220,
    opacity: 0.03,
  },
  cardMistRightDefault: {
    right: -90,
    top: -40,
    width: 260,
    height: 260,
    backgroundColor: '#8C8D91',
    opacity: 0.1,
  },
  cardMistRightAction: {
    right: -110,
    top: -55,
    width: 280,
    height: 280,
    backgroundColor: '#1A1016',
    opacity: 0.34,
  },
  cardGlowPrimary: {
    position: 'absolute',
    right: -120,
    top: -150,
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: '#2C2B2D',
    opacity: 0.92,
  },
  cardGlowAction: {
    right: -150,
    top: -170,
    width: 390,
    height: 390,
    borderRadius: 210,
    backgroundColor: '#1F0B15',
    opacity: 0.86,
  },
  section: {
    color: 'rgba(255,255,255,0.58)',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3.2,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 54 / 2,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDesc: {
    color: 'rgba(255,255,255,0.78)',
    fontSize: 16,
    lineHeight: 24,
  },
  cta: {
    marginTop: 14,
    alignSelf: 'flex-start',
    borderRadius: 999,
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    minWidth: 152,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  ctaText: {
    color: colors.black,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
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
