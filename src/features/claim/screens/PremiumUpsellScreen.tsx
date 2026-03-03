import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'PremiumUpsell'>;

export function PremiumUpsellScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.topRow}>
          <Pressable accessibilityRole="button" style={styles.iconBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.iconText}>×</Text>
          </Pressable>
          <Pressable accessibilityRole="button" onPress={() => navigation.navigate('PurchaseError')}>
            <Text style={styles.restore}>RESTORE</Text>
          </Pressable>
        </View>

        <View style={styles.center}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>∞</Text>
          </View>
          <Text style={styles.plan}>FOREVER</Text>
          <Text style={styles.title}>The Ultimate Claim</Text>
          <Text style={styles.copy}>
            A true connection cannot be duplicated. Claim that special one to unlock the full depth of your shared journey.
          </Text>

          <View style={styles.planCard}>
            <Text style={styles.planTitle}>Yearly Access</Text>
            <Text style={styles.planPrice}>$8.33/mo • Billed $99.99</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          style={styles.cta}
          onPress={() => navigation.navigate('PurchaseSuccess')}
        >
          <Text style={styles.ctaText}>Subscribe for $99.99</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg, paddingBottom: 24 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  iconText: { color: colors.white, fontSize: 20, fontWeight: '700' },
  restore: { color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  badge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.14)',
  },
  badgeText: { color: colors.white, fontSize: 28, fontWeight: '900' },
  plan: {
    marginTop: spacing.sm,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    backgroundColor: colors.white,
    color: colors.black,
    fontSize: 12,
    fontWeight: '800',
  },
  title: { marginTop: spacing.md, color: colors.white, fontSize: 34 / 2, fontWeight: '900' },
  copy: {
    marginTop: spacing.sm,
    color: 'rgba(255,255,255,0.65)',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    maxWidth: 320,
  },
  planCard: {
    marginTop: spacing.lg,
    width: '100%',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(79,121,255,0.6)',
    backgroundColor: 'rgba(35,46,82,0.5)',
    padding: spacing.md,
  },
  planTitle: { color: colors.white, fontSize: 14, fontWeight: '900' },
  planPrice: { marginTop: 4, color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  cta: {
    borderRadius: 14,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  ctaText: { color: colors.black, fontSize: 16, fontWeight: '700' },
});
