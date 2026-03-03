import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { ProfileSetupStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';

type Props = NativeStackScreenProps<ProfileSetupStackParamList, 'ProfileSetupSuccess'>;

export function ProfileSetupSuccessScreen(_props: Props) {
  const completeProfileSetup = useSessionStore(state => state.completeProfileSetup);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.center}>
          <View style={styles.checkOuter}>
            <Text style={styles.check}>OK</Text>
          </View>
          <Text style={styles.title}>You're All Set!</Text>
          <Text style={styles.copy}>
            Your profile details are saved successfully. Continue to enter Claimy.
          </Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Continue"
            onPress={completeProfileSetup}
            variant="light"
            fullWidth
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
    gap: spacing.md,
  },
  checkOuter: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: 'rgba(52, 199, 89, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(52, 199, 89, 0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  check: {
    color: '#34C759',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  copy: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    paddingHorizontal: spacing.sm,
  },
  actions: {
    paddingBottom: 30,
  },
});
