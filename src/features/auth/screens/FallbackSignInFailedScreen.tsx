import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { SignInFailedIcon } from '../../../shared/components/AppIcons';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<AuthStackParamList, 'FallbackSignInFailed'>;

export function FallbackSignInFailedScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.center}>
          <View style={styles.iconOuter}>
            <SignInFailedIcon size={44} color="#FF5A5F" />
          </View>
          <Text style={styles.title}>Failed to Sign In</Text>
          <Text style={styles.copy}>
            We could not sign you into your account. Please try again in a few minutes.
          </Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Back to Welcome"
            variant="light"
            fullWidth
            onPress={() => navigation.navigate('Welcome')}
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  iconOuter: {
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
  title: {
    color: colors.white,
    fontSize: 42 / 2,
    fontWeight: '900',
  },
  copy: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: spacing.sm,
  },
  actions: {
    paddingBottom: 30,
  },
});
