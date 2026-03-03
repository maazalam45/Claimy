import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ShareStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ShareStackParamList, 'QRCode'>;

const cells = Array.from({ length: 121 }, (_, i) => i);
const active = new Set([0, 1, 2, 3, 10, 11, 12, 13, 20, 21, 22, 23, 33, 34, 43, 44, 54, 55, 56, 57, 63, 64, 65, 76, 88, 89, 90, 97, 98, 99, 110, 111, 112, 113, 120]);

export function QRCodeScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.circleBtn}>
            <Text style={styles.circleText}>{'<'}</Text>
          </Pressable>
          <View style={styles.headerCenter}>
            <Text style={styles.title}>Talking Stage</Text>
            <Text style={styles.sub}>• SECURE LINK ACTIVE</Text>
          </View>
          <Pressable style={styles.circleBtn}>
            <Text style={styles.circleText}>↻</Text>
          </Pressable>
        </View>

        <GlassCard style={styles.qrWrap}>
          <View style={styles.qrPanel}>
            <View style={styles.grid}>
              {cells.map(cell => (
                <View key={cell} style={[styles.cell, active.has(cell) && styles.cellOn]} />
              ))}
            </View>
            <View style={styles.centerDot} />
          </View>
        </GlassCard>

        <View style={styles.required}><Text style={styles.requiredText}>ACTION REQUIRED</Text></View>
        <Text style={styles.scan}>Scan to confirm</Text>
        <Text style={styles.claim}>Talking Stage claim</Text>

        <View style={styles.actions}>
          <Pressable style={styles.actionBtn}><Text style={styles.actionText}>↥  Share Code</Text></Pressable>
          <Pressable style={[styles.actionBtn, styles.actionBtnAlt]} onPress={() => navigation.popToTop()}>
            <Text style={styles.actionText}>▢  Copy Link</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  circleBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center' },
  circleText: { color: colors.white, fontSize: 18, fontWeight: '700' },
  headerCenter: { alignItems: 'center' },
  title: { color: colors.white, fontSize: 34 / 2, fontWeight: '900' },
  sub: { marginTop: 2, color: 'rgba(190,166,255,0.82)', fontSize: 10, fontWeight: '700', letterSpacing: 1 },
  qrWrap: { marginTop: spacing.lg, borderRadius: 28, padding: spacing.lg, backgroundColor: 'rgba(255,255,255,0.04)' },
  qrPanel: { borderRadius: 18, padding: 14, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' },
  grid: { width: 230, height: 230, flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: 20.9, height: 20.9, backgroundColor: '#FFFFFF' },
  cellOn: { backgroundColor: '#B26DFF' },
  centerDot: { position: 'absolute', width: 34, height: 34, borderRadius: 17, backgroundColor: 'rgba(255,255,255,0.9)', borderWidth: 1, borderColor: 'rgba(178,109,255,0.4)' },
  required: { marginTop: spacing.lg, alignSelf: 'center', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 5, backgroundColor: 'rgba(255,255,255,0.06)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)' },
  requiredText: { color: 'rgba(255,255,255,0.45)', fontSize: 10, fontWeight: '800', letterSpacing: 0.7 },
  scan: { marginTop: spacing.sm, textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: 13 },
  claim: { marginTop: 2, textAlign: 'center', color: '#B56FFF', fontSize: 33 / 2, fontWeight: '800' },
  actions: { marginTop: 'auto', marginBottom: 20, flexDirection: 'row', gap: spacing.sm },
  actionBtn: { flex: 1, height: 52, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  actionBtnAlt: { backgroundColor: 'rgba(111,62,255,0.22)', borderColor: 'rgba(111,62,255,0.35)' },
  actionText: { color: colors.white, fontSize: 16 / 1.2, fontWeight: '700' },
});
