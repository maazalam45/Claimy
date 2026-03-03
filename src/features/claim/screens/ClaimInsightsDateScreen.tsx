import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'ClaimInsightsDate'>;

export function ClaimInsightsDateScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <GlassCard style={styles.card}>
          <Text style={styles.row}>Time Together</Text>
          <Text style={styles.row}>Next Anniversary  12 days left</Text>
          <GlassCard style={styles.inner}>
            <Text style={styles.date}>December 10, 2025</Text>
            <Pressable style={styles.btn}><Text style={styles.btnText}>Add to Calendar</Text></Pressable>
          </GlassCard>
          <Text style={styles.row}>Official Passport  View</Text>
        </GlassCard>
        <Pressable style={styles.cta} onPress={() => navigation.navigate('ClaimInsightsToday')}>
          <Text style={styles.ctaText}>Open Today Variant</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: spacing.lg, justifyContent: 'center' },
  card: { padding: spacing.md, gap: spacing.sm },
  row: { color: colors.white, fontSize: 16, fontWeight: '700' },
  inner: { borderRadius: 14, padding: spacing.md, borderColor: 'rgba(79,121,255,0.45)' },
  date: { color: colors.white, fontSize: 36 / 2, fontWeight: '900', textAlign: 'center' },
  btn: { marginTop: spacing.sm, alignSelf: 'center', borderRadius: 16, backgroundColor: 'rgba(255,47,179,0.16)', borderWidth: 1, borderColor: 'rgba(255,47,179,0.5)', paddingHorizontal: 16, paddingVertical: 8 },
  btnText: { color: '#FF2FB3', fontWeight: '700' },
  cta: { marginTop: spacing.lg, borderRadius: 12, backgroundColor: colors.white, alignItems: 'center', paddingVertical: spacing.sm },
  ctaText: { color: colors.black, fontSize: 15, fontWeight: '700' },
});
