import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ShareStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ShareStackParamList, 'Share4'>;

export function Share4Screen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={[styles.root, styles.rootTheme]}>
        <View style={[styles.topGlow, styles.topGlowTheme]} />
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.circleBtn}><Text style={styles.circleText}>×</Text></Pressable>
          <Pressable onPress={() => navigation.navigate('QRCode')} style={styles.postBtn}><Text style={styles.postText}>POST</Text></Pressable>
        </View>
        <GlassCard style={[styles.card, styles.cardTheme]}>
          <View style={styles.badges}><View style={styles.badge}><Text style={styles.badgeText}>HAPPY ANNIVERSARY</Text></View><Text style={styles.brandMini}>CLAIMY</Text></View>
          <View style={styles.avatars}><View style={styles.avatarA} /><View style={styles.avatarB} /></View>
          <View style={styles.claimed}><Text style={styles.claimedText}>CLAIMED</Text></View>
          <Text style={styles.name}>Inori & Adrian</Text>
          <Text style={styles.desc}>Celebrating another year of love and connection.</Text>
          <View style={styles.statusBar}><View><Text style={styles.statusLabel}>STATUS</Text><Text style={styles.statusValue}>Engaged</Text></View><View style={styles.statusOrb}><Text style={styles.statusOrbText}>◈</Text></View></View>
          <View style={styles.footRow}><Text style={styles.footText}>AUTHENTICATED</Text><Text style={styles.qr}>▦</Text></View>
          <View style={styles.footRow}><Text style={styles.footText}>CLAIMY CERTIFIED</Text><Text style={styles.qr}>▦</Text></View>
        </GlassCard>
        <Text style={styles.shareNews}>SHARE THE NEWS</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  rootTheme: { backgroundColor: '#34280B' },
  topGlow: { ...StyleSheet.absoluteFillObject, top: -80, height: 460 },
  topGlowTheme: { backgroundColor: 'rgba(255,194,37,0.26)' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 38 },
  circleBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)' },
  circleText: { color: colors.white, fontSize: 22, marginTop: -2 },
  postBtn: { height: 40, borderRadius: 20, backgroundColor: colors.white, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' },
  postText: { color: '#121212', fontWeight: '900', fontSize: 14 },
  card: { marginTop: 26, padding: spacing.lg, borderRadius: 28, borderColor: 'rgba(255,255,255,0.16)' },
  cardTheme: { backgroundColor: '#A9831C' },
  badges: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4, backgroundColor: 'rgba(255,255,255,0.16)' },
  badgeText: { color: colors.white, fontSize: 11, fontWeight: '800', letterSpacing: 0.6 },
  brandMini: { color: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: '800' },
  avatars: { marginTop: spacing.md, flexDirection: 'row', justifyContent: 'center' },
  avatarA: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.6)', borderWidth: 2, borderColor: 'rgba(0,0,0,0.35)' },
  avatarB: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.7)', borderWidth: 2, borderColor: 'rgba(0,0,0,0.35)', marginLeft: -12 },
  claimed: { alignSelf: 'center', marginTop: -10, borderRadius: 14, paddingHorizontal: 16, paddingVertical: 5, backgroundColor: colors.white },
  claimedText: { color: '#1A1A1A', fontSize: 14, fontWeight: '900' },
  name: { marginTop: spacing.md, textAlign: 'center', color: colors.white, fontSize: 19, fontWeight: '900' },
  desc: { marginTop: 6, textAlign: 'center', color: 'rgba(255,255,255,0.72)', fontSize: 13 },
  statusBar: { marginTop: spacing.lg, borderRadius: 14, backgroundColor: 'rgba(0,0,0,0.38)', padding: spacing.md, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusLabel: { color: 'rgba(255,255,255,0.5)', fontSize: 10, letterSpacing: 1, fontWeight: '800' },
  statusValue: { color: colors.white, marginTop: 2, fontSize: 16, fontWeight: '700' },
  statusOrb: { width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(255,214,56,0.2)', borderWidth: 1, borderColor: 'rgba(255,214,56,0.4)', alignItems: 'center', justifyContent: 'center' },
  statusOrbText: { color: '#FFD94E', fontSize: 16, fontWeight: '800' },
  footRow: { marginTop: spacing.sm, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footText: { color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: '700', letterSpacing: 0.7 },
  qr: { color: 'rgba(255,255,255,0.85)', fontSize: 18 },
  shareNews: { marginTop: spacing.xl, textAlign: 'center', color: 'rgba(255,255,255,0.62)', fontSize: 13, letterSpacing: 1.4, fontWeight: '800' },
});
