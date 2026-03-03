import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import { ProfileStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { GlassCard } from '../../../shared/components/GlassCard';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';

type Props = NativeStackScreenProps<ProfileStackParamList, 'Profile'>;

function MenuRow({ label, value, withToggle = false }: { label: string; value?: string; withToggle?: boolean }) {
  return (
    <View style={styles.menuRow}>
      <Text style={styles.menuLabel}>{label}</Text>
      {withToggle ? (
        <View style={styles.toggle}>
          <View style={styles.toggleKnob} />
        </View>
      ) : (
        <Text style={styles.menuValue}>{value}</Text>
      )}
    </View>
  );
}

export function ProfileScreen({ navigation: _navigation }: Props) {
  const signOut = useSessionStore(state => state.signOut);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <Text style={styles.pageTitle}>Profile</Text>
        <Text style={styles.settings}>Settings</Text>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.hero}>
            <View style={styles.heroImage} />
            <View style={styles.heroOverlay}>
              <View style={styles.heroNameRow}>
                <Text style={styles.heroName}>Inori</Text>
                <View style={styles.verifiedDot}>
                  <Text style={styles.verifiedText}>✓</Text>
                </View>
              </View>
              <View style={styles.heroMetaRow}>
                <Text style={styles.heroSub}>Publicly Claimed</Text>
                <View style={styles.editPill}>
                  <Text style={styles.editText}>✎  Edit</Text>
                </View>
                <View style={styles.cameraPill}>
                  <Text style={styles.cameraText}>◉</Text>
                </View>
              </View>
            </View>
          </View>

          <GlassCard style={styles.statusCard}>
            <View>
              <Text style={styles.statusLabel}>STATUS</Text>
              <Text style={styles.statusValue}>Single</Text>
            </View>
            <View style={styles.statusIcon}>
              <Text style={styles.statusIconText}>◌</Text>
            </View>
          </GlassCard>
          <Text style={styles.statusHint}>Tap to switch status (Claimed)</Text>

          <GlassCard style={styles.claimyPlus}>
            <View style={styles.claimyBadge}>
              <Text style={styles.claimyBadgeText}>♡</Text>
            </View>
            <View style={styles.claimyTextWrap}>
              <Text style={styles.claimyTitle}>Claimy Plus</Text>
              <Text style={styles.claimySub}>Subscription Active</Text>
            </View>
            <Text style={styles.chev}>{'>'}</Text>
          </GlassCard>

          <Text style={styles.section}>ACCOUNT SECURITY</Text>
          <GlassCard style={styles.menuCard}>
            <MenuRow label="Biometric Lock" withToggle />
            <View style={styles.divider} />
            <MenuRow label="Login Activity" value=">" />
          </GlassCard>

          <Text style={styles.section}>GENERAL</Text>
          <GlassCard style={styles.menuCard}>
            <MenuRow label="Language" value="English  >" />
            <View style={styles.divider} />
            <MenuRow label="Terms & Conditions" value=">" />
            <View style={styles.divider} />
            <MenuRow label="Help & Support" value=">" />
          </GlassCard>

          <View style={styles.actions}>
            <AppButton label="Sign Out" variant="dark" fullWidth onPress={signOut} />
            <Pressable accessibilityRole="button" onPress={() => setShowDeleteModal(true)}>
              <Text style={styles.deleteText}>Delete Account</Text>
            </Pressable>
          </View>

          <View style={styles.bottomPad} />
        </ScrollView>
      </View>

      <Modal visible={showDeleteModal} transparent animationType="fade" onRequestClose={() => setShowDeleteModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalIconWrap}>
              <Text style={styles.modalIcon}>⚠</Text>
            </View>
            <Text style={styles.modalTitle}>Delete Account</Text>
            <Text style={styles.modalCopy}>
              This action is permanent. All your matches, messages, and claims will be lost forever.
            </Text>

            <View style={styles.modalActions}>
              <Pressable style={styles.modalAction} onPress={() => setShowDeleteModal(false)}>
                <Text style={styles.modalActionText}>Cancel</Text>
              </Pressable>
              <View style={styles.modalDivider} />
              <Pressable
                style={styles.modalAction}
                onPress={() => {
                  setShowDeleteModal(false);
                  signOut();
                }}
              >
                <Text style={styles.modalDeleteText}>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: spacing.lg,
  },
  pageTitle: {
    color: colors.white,
    fontSize: 26 / 1.5,
    fontWeight: '900',
    paddingHorizontal: spacing.lg,
  },
  settings: {
    marginTop: 2,
    color: 'rgba(255,255,255,0.5)',
    fontSize: 10,
    paddingHorizontal: spacing.lg,
  },
  scroll: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
  },
  hero: {
    height: 260,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginTop: spacing.sm,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#BFB6A8',
  },
  heroOverlay: {
    marginTop: 'auto',
    padding: spacing.md,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  heroNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroName: {
    color: colors.white,
    fontSize: 34 / 2,
    fontWeight: '900',
  },
  verifiedDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#24C866',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '900',
  },
  heroMetaRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  heroSub: {
    color: 'rgba(255,255,255,0.82)',
    fontSize: 12,
    fontWeight: '600',
  },
  editPill: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  editText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
  cameraPill: {
    marginLeft: 'auto',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  statusCard: {
    marginTop: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusLabel: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  statusValue: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '900',
    marginTop: 2,
  },
  statusIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(55,85,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(55,85,255,0.3)',
  },
  statusIconText: {
    color: '#75A6FF',
    fontSize: 14,
    fontWeight: '800',
  },
  statusHint: {
    marginTop: 6,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.35)',
    fontSize: 10,
  },
  claimyPlus: {
    marginTop: spacing.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: 'rgba(255,191,0,0.16)',
    borderColor: 'rgba(255,191,0,0.2)',
  },
  claimyBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.22)',
  },
  claimyBadgeText: {
    color: '#FFCC00',
    fontSize: 12,
    fontWeight: '900',
  },
  claimyTextWrap: {
    flex: 1,
  },
  claimyTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  claimySub: {
    color: 'rgba(255,255,255,0.58)',
    fontSize: 11,
  },
  chev: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 16,
    fontWeight: '800',
  },
  section: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    color: 'rgba(255,255,255,0.34)',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  menuCard: {
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
  },
  menuRow: {
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuLabel: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
  menuValue: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 12,
  },
  toggle: {
    width: 40,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    paddingHorizontal: 2,
    alignItems: 'flex-end',
  },
  toggleKnob: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  actions: {
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  deleteText: {
    color: '#FF4E4E',
    textAlign: 'center',
    fontSize: 11,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  modalCard: {
    width: '100%',
    maxWidth: 330,
    borderRadius: 18,
    backgroundColor: '#1B1E27',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  modalIconWrap: {
    marginTop: spacing.lg,
    alignSelf: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,58,76,0.16)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalIcon: {
    color: '#FF5A5F',
    fontSize: 26,
    fontWeight: '900',
  },
  modalTitle: {
    marginTop: spacing.md,
    textAlign: 'center',
    color: colors.white,
    fontSize: 34 / 2,
    fontWeight: '900',
  },
  modalCopy: {
    marginTop: spacing.sm,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
    lineHeight: 20,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },
  modalActions: {
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    height: 54,
  },
  modalAction: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalActionText: {
    color: colors.white,
    fontSize: 16 / 1.15,
    fontWeight: '700',
  },
  modalDeleteText: {
    color: '#FF4E4E',
    fontSize: 16 / 1.15,
    fontWeight: '800',
  },
  modalDivider: {
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  bottomPad: {
    height: 110,
  },
});
