import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'PrivatiseModal'>;

export function PrivatiseModalScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.iconOuter}><Text style={styles.icon}>⌂</Text></View>
        <Text style={styles.title}>Make Private?</Text>
        <Text style={styles.copy}>Inori must accept this request. If private, others cannot tap to view their profile</Text>
        <View style={styles.actions}>
          <Pressable style={styles.cancel} onPress={() => navigation.goBack()}><Text style={styles.cancelText}>Cancel</Text></Pressable>
          <Pressable style={styles.send} onPress={() => navigation.goBack()}><Text style={styles.sendText}>Send</Text></Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.64)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  modal: { width: '100%', borderRadius: 20, backgroundColor: '#1A1B22', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', padding: spacing.lg, alignItems: 'center' },
  iconOuter: { width: 68, height: 68, borderRadius: 34, backgroundColor: 'rgba(255,255,255,0.08)', alignItems: 'center', justifyContent: 'center' },
  icon: { color: colors.white, fontSize: 28 / 1.3, fontWeight: '900' },
  title: { marginTop: spacing.md, color: colors.white, fontSize: 19 * 1.2, fontWeight: '900' },
  copy: { marginTop: spacing.sm, color: 'rgba(255,255,255,0.6)', textAlign: 'center', fontSize: 14 },
  actions: { marginTop: spacing.lg, flexDirection: 'row', width: '100%', gap: spacing.sm },
  cancel: { flex: 1, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.12)', alignItems: 'center', paddingVertical: spacing.sm },
  send: { flex: 1, borderRadius: 12, backgroundColor: colors.white, alignItems: 'center', paddingVertical: spacing.sm },
  cancelText: { color: colors.white, fontWeight: '700', fontSize: 16 / 1.1 },
  sendText: { color: colors.black, fontWeight: '700', fontSize: 16 / 1.1 },
});
