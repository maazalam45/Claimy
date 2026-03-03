import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'PurchaseSuccess'>;

export function PurchaseSuccessScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.iconOuter}>
          <Text style={styles.icon}>✓</Text>
        </View>
        <Text style={styles.title}>Purchase Successful!</Text>
        <Text style={styles.copy}>Your subscription is now active.</Text>
        <Pressable
          accessibilityRole="button"
          style={styles.cta}
          onPress={() => navigation.navigate('Claim2')}
        >
          <Text style={styles.ctaText}>Continue</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.xl },
  iconOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52,199,89,0.16)',
    borderWidth: 1,
    borderColor: 'rgba(52,199,89,0.4)',
  },
  icon: { color: '#34C759', fontSize: 30, fontWeight: '900' },
  title: { marginTop: spacing.lg, color: colors.white, fontSize: 22, fontWeight: '900' },
  copy: { marginTop: 6, color: 'rgba(255,255,255,0.65)', fontSize: 14 },
  cta: {
    marginTop: spacing.xl,
    width: '100%',
    borderRadius: 14,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  ctaText: { color: colors.black, fontSize: 16, fontWeight: '700' },
});
