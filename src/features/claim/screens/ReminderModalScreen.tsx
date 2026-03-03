import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'ReminderModal'>;

export function ReminderModalScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.title}>Anniversary Reminder</Text>
          <Pressable onPress={() => navigation.goBack()}><Text style={styles.close}>×</Text></Pressable>
        </View>
        <View style={styles.input}><Text style={styles.inputText}>Thu, Jan 29 | 18:00</Text></View>
        <View style={styles.calendar}>
          <Text style={styles.month}>September 2026</Text>
          <Text style={styles.days}>S M T W T F S</Text>
          <Text style={styles.dates}>1 2 3 4 5 6 7</Text>
        </View>
        <View style={styles.input}><Text style={styles.inputText}>18:00</Text></View>
        <Pressable style={styles.cta} onPress={() => navigation.goBack()}>
          <Text style={styles.ctaText}>✓  Confirm Schedule</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.64)', justifyContent: 'center', paddingHorizontal: spacing.lg },
  modal: { borderRadius: 16, backgroundColor: '#1A1B22', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', padding: spacing.md },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: colors.white, fontSize: 18, fontWeight: '900' },
  close: { color: 'rgba(255,255,255,0.8)', fontSize: 24 },
  input: { marginTop: spacing.sm, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.4)', padding: spacing.sm },
  inputText: { color: colors.white, fontSize: 14 },
  calendar: { marginTop: spacing.sm, borderRadius: 12, backgroundColor: 'rgba(0,0,0,0.45)', padding: spacing.md, gap: 8 },
  month: { color: colors.white, fontSize: 18 / 1.2, fontWeight: '700', textAlign: 'center' },
  days: { color: 'rgba(255,255,255,0.45)', textAlign: 'center' },
  dates: { color: colors.white, textAlign: 'center' },
  cta: { marginTop: spacing.md, borderRadius: 12, backgroundColor: colors.white, alignItems: 'center', paddingVertical: spacing.sm },
  ctaText: { color: colors.black, fontSize: 16, fontWeight: '700' },
});
