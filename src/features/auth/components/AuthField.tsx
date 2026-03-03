import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type AuthFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  secureTextEntry?: boolean;
  showToggle?: boolean;
  error?: string;
};

export function AuthField({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
  secureTextEntry,
  showToggle,
  error,
}: AuthFieldProps) {
  const [isSecure, setIsSecure] = useState(Boolean(secureTextEntry));
  const computedSecure = useMemo(
    () => (secureTextEntry ? isSecure : false),
    [secureTextEntry, isSecure],
  );

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <View style={styles.row}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255,0.25)"
          style={styles.input}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          secureTextEntry={computedSecure}
        />
        {showToggle ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={computedSecure ? 'Show password' : 'Hide password'}
            onPress={() => setIsSecure(prev => !prev)}
            hitSlop={10}
            style={styles.toggle}
          >
            <Text style={styles.toggleText}>{computedSecure ? 'Show' : 'Hide'}</Text>
          </Pressable>
        ) : null}
      </View>
      <View style={[styles.underline, error && styles.underlineError]} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: 8,
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 0.8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    paddingVertical: 6,
    color: colors.white,
    fontSize: 16,
  },
  toggle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
    fontWeight: '700',
  },
  underline: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  underlineError: {
    backgroundColor: '#FF3B5C',
  },
  error: {
    marginTop: 6,
    color: '#FF3B5C',
    fontSize: 12,
    lineHeight: 16,
  },
});
