import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { ChatStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatYourAnswer'>;

export function ChatYourAnswerScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.row}>
          <Text style={styles.title}>Your Answer</Text>
          <Pressable onPress={() => navigation.goBack()}><Text style={styles.close}>×</Text></Pressable>
        </View>
        <TextInput multiline placeholder="Type your answer here..." placeholderTextColor="rgba(255,255,255,0.35)" style={styles.input} />
        <Pressable style={styles.cta} onPress={() => navigation.goBack()}>
          <Text style={styles.ctaText}>✓  Submit Answer</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.64)', justifyContent: 'flex-end', padding: spacing.lg },
  modal: { borderRadius: 16, backgroundColor: '#1A1B22', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', padding: spacing.md },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: colors.white, fontSize: 18 * 1.2 / 1.2, fontWeight: '800' },
  close: { color: 'rgba(255,255,255,0.7)', fontSize: 24 },
  input: { marginTop: spacing.sm, minHeight: 96, borderRadius: 10, backgroundColor: '#0B0E1A', color: colors.white, padding: spacing.sm, textAlignVertical: 'top' },
  cta: { marginTop: spacing.sm, borderRadius: 12, backgroundColor: colors.white, alignItems: 'center', paddingVertical: spacing.sm },
  ctaText: { color: colors.black, fontSize: 16 / 1.1, fontWeight: '700' },
});
