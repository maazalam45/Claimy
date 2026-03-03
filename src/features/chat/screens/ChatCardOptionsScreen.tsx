import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ChatStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatCardOptions'>;

export function ChatCardOptionsScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>Use this card?</Text>
        <Pressable style={[styles.action, styles.primary]} onPress={() => navigation.goBack()}>
          <Text style={styles.primaryText}>Ask Them</Text>
        </Pressable>
        <Pressable style={styles.action} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Skip & Replace</Text>
        </Pressable>
        <Pressable style={styles.action} onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Copy</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.64)', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  modal: { width: '100%', borderRadius: 16, backgroundColor: '#13141B', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', padding: spacing.md, gap: spacing.sm },
  title: { color: colors.white, fontSize: 22 / 1.2, fontWeight: '800', textAlign: 'center' },
  action: { borderRadius: 10, alignItems: 'center', paddingVertical: spacing.sm, backgroundColor: 'rgba(255,255,255,0.08)' },
  primary: { backgroundColor: colors.white },
  text: { color: colors.white, fontWeight: '700' },
  primaryText: { color: colors.black, fontWeight: '700' },
});
