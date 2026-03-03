import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../../../shared/theme/colors';

type UnderlinedInputProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  multiline?: boolean;
  numberOfLines?: number;
};

export function UnderlinedInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  multiline,
  numberOfLines,
}: UnderlinedInputProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.22)"
        style={[styles.input, multiline && styles.inputMultiline]}
        keyboardType={keyboardType}
        autoCapitalize="words"
        autoCorrect={false}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 10,
  },
  label: {
    fontSize: 11,
    fontWeight: '800',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 0.8,
  },
  input: {
    color: colors.white,
    fontSize: 16,
    paddingVertical: 6,
  },
  inputMultiline: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
  underline: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
});
