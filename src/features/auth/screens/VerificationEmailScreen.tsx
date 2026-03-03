import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<AuthStackParamList, 'VerificationEmail'>;

export function VerificationEmailScreen({ navigation, route }: Props) {
  const { email, source } = route.params;

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.center}>
          <View style={styles.mailOuter}>
            <Text style={styles.mailGlyph}>✉</Text>
          </View>
          <Text style={styles.title}>Email Sent!</Text>
          <Text style={styles.copy}>Your verification email has been sent to:</Text>
          <Text style={styles.email}>{email}</Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Resend Email"
            variant="light"
            fullWidth
            onPress={() =>
              source === 'signup' ? navigation.navigate('Login') : navigation.navigate('NewPassword')
            }
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  header: {
    paddingTop: spacing.lg,
    height: 70,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  mailOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  mailGlyph: {
    color: '#22C55E',
    fontSize: 36,
    fontWeight: '900',
  },
  title: {
    color: colors.white,
    fontSize: 42 / 2,
    fontWeight: '900',
  },
  copy: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
  },
  email: {
    color: '#16C274',
    fontSize: 34 / 2,
    fontWeight: '800',
  },
  actions: {
    paddingBottom: 30,
  },
});
