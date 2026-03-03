import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'FaceSearch'>;

export function FaceSearchScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.topBar}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          <View style={styles.creditsPill}>
            <Text style={styles.creditsText}>3 credits</Text>
          </View>
          <IconCircleButton icon="⌕" accessibilityLabel="Search" />
        </View>

        <View style={styles.center}>
          <GlassCard style={styles.frame}>
            <View style={styles.frameInner} />
          </GlassCard>
          <Text style={styles.align}>Align Face</Text>
        </View>

        <View style={styles.modeTabs}>
          <Text style={styles.modeMuted}>QR CODE</Text>
          <Text style={styles.modeActive}>FACE SEARCH</Text>
        </View>

        <View style={styles.bottomRow}>
          <IconCircleButton icon="◫" accessibilityLabel="Gallery" />
          <Pressable
            accessibilityRole="button"
            style={styles.capture}
            onPress={() => navigation.navigate('LoadingRipple', { mode: 'face' })}
          >
            <View style={styles.captureInner}>
              <Text style={styles.captureGlyph}>⌘</Text>
            </View>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={styles.smallBtn}
            onPress={() => navigation.navigate('ScanQR')}
          >
            <Text style={styles.smallBtnText}>↻</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  creditsPill: {
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(56,255,178,0.2)',
    backgroundColor: 'rgba(56,255,178,0.08)',
  },
  creditsText: { color: '#30D987', fontSize: 12, fontWeight: '700' },
  center: { marginTop: '36%', alignItems: 'center' },
  frame: { borderRadius: 24, padding: 10, backgroundColor: 'rgba(255,255,255,0.06)' },
  frameInner: { width: 220, height: 220, borderRadius: 20, backgroundColor: '#D9D5CC' },
  align: { marginTop: spacing.md, color: colors.white, fontSize: 34 / 2, fontWeight: '900' },
  modeTabs: { marginTop: 'auto', marginBottom: spacing.md, flexDirection: 'row', justifyContent: 'center', gap: spacing.lg },
  modeMuted: { color: 'rgba(255,255,255,0.35)', fontSize: 13, fontWeight: '800' },
  modeActive: { color: '#4F79FF', fontSize: 13, fontWeight: '900' },
  bottomRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 18 },
  capture: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255,255,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  captureInner: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.08)',
  },
  captureGlyph: { color: '#303542', fontSize: 24, fontWeight: '800' },
  smallBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallBtnText: { color: 'rgba(255,255,255,0.8)', fontSize: 20, fontWeight: '700' },
});
