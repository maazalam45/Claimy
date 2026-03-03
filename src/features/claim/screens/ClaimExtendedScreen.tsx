import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'ClaimExtended'>;

export function ClaimExtendedScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.hero} />
        <View style={styles.overlay}>
          <Text style={styles.name}>Inori</Text>
          <Text style={styles.sub}>Publicly Claimed</Text>
        </View>
        <GlassCard style={styles.card}>
          <Text style={styles.label}>RELATIONSHIP STATUS</Text>
          <Text style={styles.status}>Single</Text>
          <Text style={styles.hint}>Tap to upgrade claim</Text>
        </GlassCard>
        <Text style={styles.section}>INTERESTS</Text>
        <View style={styles.chips}>
          <View style={styles.chip}><Text style={styles.chipText}>General</Text></View>
          <View style={styles.chip}><Text style={styles.chipText}>Sports</Text></View>
          <View style={styles.chip}><Text style={styles.chipText}>Photography</Text></View>
        </View>
        <Pressable style={styles.cta} onPress={() => navigation.goBack()}>
          <Text style={styles.ctaText}>Back</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: spacing.lg },
  hero: { height: 240, borderRadius: 18, backgroundColor: '#BFB6A8' },
  overlay: { marginTop: -54 },
  name: { color: colors.white, fontSize: 34 / 2, fontWeight: '900' },
  sub: { color: 'rgba(255,255,255,0.8)', fontSize: 15 / 1.2, fontWeight: '600' },
  card: { marginTop: spacing.md, padding: spacing.md },
  label: { color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: '800', letterSpacing: 0.8 },
  status: { marginTop: 4, color: colors.white, fontSize: 18, fontWeight: '900' },
  hint: { marginTop: 4, color: 'rgba(255,255,255,0.45)', fontSize: 12 },
  section: { marginTop: spacing.lg, color: '#C158FF', fontSize: 14, fontWeight: '800', letterSpacing: 1 },
  chips: { marginTop: spacing.sm, flexDirection: 'row', gap: spacing.sm },
  chip: { borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)' },
  chipText: { color: colors.white, fontSize: 14, fontWeight: '700' },
  cta: { marginTop: 'auto', borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.1)', paddingVertical: spacing.sm, alignItems: 'center' },
  ctaText: { color: colors.white, fontSize: 15, fontWeight: '700' },
});
