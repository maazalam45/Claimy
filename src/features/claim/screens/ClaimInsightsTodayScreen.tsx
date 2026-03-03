import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'ClaimInsightsToday'>;

export function ClaimInsightsTodayScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <GlassCard style={styles.card}>
          <Text style={styles.row}>Time Together</Text>
          <Text style={styles.row}>Next Anniversary  Today!</Text>
          <GlassCard style={styles.inner}>
            <Text style={styles.today}>Today!</Text>
            <Pressable style={styles.btn}><Text style={styles.btnText}>∞  View Anniversary Passport</Text></Pressable>
          </GlassCard>
          <Text style={styles.row}>Official Passport  View</Text>
        </GlassCard>
        <Pressable style={styles.cta} onPress={() => navigation.goBack()}>
          <Text style={styles.ctaText}>Back</Text>
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
  today: { color: colors.white, fontSize: 42 / 2, fontWeight: '900', textAlign: 'center' },
  btn: { marginTop: spacing.sm, alignSelf: 'center', borderRadius: 20, backgroundColor: '#F2C312', paddingHorizontal: 18, paddingVertical: 10 },
  btnText: { color: colors.black, fontWeight: '700' },
  cta: { marginTop: spacing.lg, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', paddingVertical: spacing.sm },
  ctaText: { color: colors.white, fontSize: 15, fontWeight: '700' },
});
