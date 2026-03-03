import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { ClaimyLogoMark } from '../../../shared/components/ClaimyLogoMark';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';
import { SocialButton } from '../components/SocialButton';

type Props = NativeStackScreenProps<AuthStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  const signIn = useSessionStore(state => state.signIn);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.center}>
          <View style={styles.logoOuter}>
            <View style={styles.logoInner}>
              <ClaimyLogoMark size={42} />
            </View>
          </View>
          <Text style={styles.brand}>CLAIMY</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.headline}>Log in or Create Account</Text>
          <Text style={styles.copy}>
            Claim your person in an exclusive space for one-on-one connections. Secure, private, and designed for two
          </Text>
          <View style={styles.actions}>
            <SocialButton
              tone="light"
              iconText="@"
              label="Continue with Email"
              onPress={() => navigation.navigate('SignUp')}
            />
            <View style={styles.row}>
              <View style={styles.half}>
                <SocialButton
                  tone="dark"
                  iconText="A"
                  label="Use Apple"
                  onPress={signIn}
                />
              </View>
              <View style={styles.half}>
                <SocialButton
                  tone="dark"
                  iconText="G"
                  label="Use Google"
                  onPress={signIn}
                />
              </View>
            </View>
          </View>
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
    gap: spacing.lg,
  },
  logoOuter: {
    width: 88,
    height: 88,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 2,
  },
  footer: {
    paddingBottom: 30,
    gap: spacing.sm,
  },
  headline: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  copy: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: spacing.sm,
  },
  actions: {
    marginTop: spacing.sm,
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  half: {
    flex: 1,
  },
});
