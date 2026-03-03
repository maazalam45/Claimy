import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { HomeStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<HomeStackParamList, 'AdminVerification'>;

export function AdminVerificationScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.center}>
          <View style={styles.iconOuter}>
            <Text style={styles.icon}>◎</Text>
          </View>
          <Text style={styles.title}>Admin Verification</Text>
          <Text style={styles.copy}>
            Manual review will be required.
            {'\n'}
            It could take 24-48 hours to complete.
          </Text>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Open Home"
            variant="light"
            fullWidth
            onPress={() => navigation.popToTop()}
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
  icon: {
    color: '#FF5A5F',
    fontSize: 34,
    fontWeight: '900',
  },
  title: {
    color: colors.white,
    fontSize: 23,
    fontWeight: '900',
  },
  copy: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16 / 1.15,
    lineHeight: 24,
    textAlign: 'center',
  },
  actions: {
    paddingBottom: 30,
  },
});
