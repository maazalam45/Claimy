import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { CheckSuccessIcon } from '../../../shared/components/AppIcons';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';

type Props = NativeStackScreenProps<AuthStackParamList, 'Success'>;

export function SuccessScreen({ navigation }: Props) {
  const completeSignup = useSessionStore(state => state.completeSignup);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.center}>
          <View style={styles.checkOuter}>
            <CheckSuccessIcon width={50} height={36} color="#22C55E" />
          </View>
          <Text style={styles.title}>You're all set</Text>
          <Text style={styles.copy}>
            Claim your person in an exclusive space for one-on-one connections. Your account has been created. Start exploring.
          </Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Continue"
            onPress={() => {
              completeSignup();
              navigation.popToTop();
            }}
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
    width: 56,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
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
