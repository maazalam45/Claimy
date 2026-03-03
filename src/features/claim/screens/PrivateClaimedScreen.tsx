import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'PrivateClaimed'>;

export function PrivateClaimedScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.avatarWrap}>
          <View style={styles.avatar} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>✓</Text>
          </View>
        </View>

        <Text style={styles.title}>Privately Claimed</Text>
        <Text style={styles.subtitle}>
          You cannot view this user&apos;s dating status as they are privately claimed.
        </Text>

        <Pressable accessibilityRole="button" style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeText}>Close</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.64)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  modal: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 24,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    backgroundColor: '#1A1B22',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
    alignItems: 'center',
  },
  avatarWrap: {
    width: 64,
    height: 64,
    marginBottom: spacing.md,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 2,
    borderColor: '#2DE29A',
  },
  badge: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#2DE29A',
    borderWidth: 2,
    borderColor: '#1A1B22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '900',
  },
  title: {
    color: colors.white,
    fontSize: 38 / 2,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: spacing.sm,
    color: 'rgba(255,255,255,0.60)',
    fontSize: 16 / 2,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'center',
    maxWidth: 260,
  },
  closeButton: {
    marginTop: spacing.lg,
    width: '100%',
    borderRadius: 12,
    paddingVertical: spacing.md,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
  },
  closeText: {
    color: colors.white,
    fontSize: 18 / 2,
    fontWeight: '800',
  },
});
