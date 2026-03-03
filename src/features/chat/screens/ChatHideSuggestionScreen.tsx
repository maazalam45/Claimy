import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ChatStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatHideSuggestion'>;

export function ChatHideSuggestionScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>Hide Suggestion?</Text>
        <Text style={styles.copy}>
          "Unpacking Our Love Languages" will be moved to the bottom of your feed in a hidden state.
        </Text>
        <Pressable style={styles.hideBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.hideText}>Hide Suggestion</Text>
        </Pressable>
      </View>
      <Pressable style={styles.cancel} onPress={() => navigation.goBack()}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.64)', justifyContent: 'flex-end', padding: spacing.lg, gap: spacing.sm },
  modal: { borderRadius: 16, backgroundColor: '#1A1B22', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', overflow: 'hidden' },
  title: { color: colors.white, fontSize: 21 / 1.2, fontWeight: '800', textAlign: 'center', paddingTop: spacing.md },
  copy: { color: 'rgba(255,255,255,0.6)', fontSize: 14, textAlign: 'center', paddingHorizontal: spacing.md, paddingBottom: spacing.md, paddingTop: spacing.sm },
  hideBtn: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)', alignItems: 'center', paddingVertical: spacing.sm },
  hideText: { color: '#FF474D', fontSize: 16 / 1.1, fontWeight: '700' },
  cancel: { borderRadius: 12, backgroundColor: '#1A1B22', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', alignItems: 'center', paddingVertical: spacing.sm },
  cancelText: { color: colors.white, fontSize: 16 / 1.1, fontWeight: '700' },
});
