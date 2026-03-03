import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { AuthField } from '../components/AuthField';
import { AuthLayout } from '../components/AuthLayout';
import { ResetPasswordValues, resetPasswordSchema } from '../validation';

type Props = NativeStackScreenProps<AuthStackParamList, 'ResetPassword'>;

export function ResetPasswordScreen({ navigation }: Props) {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: 'John.doe@gmail.com' },
    mode: 'onBlur',
  });

  const email = watch('email');

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Jump right back into your account."
      onBack={() => navigation.goBack()}
      rightAccessory={<Text style={styles.help}>?</Text>}
    >
      <View style={styles.form}>
        <AuthField
          label="Email Address"
          value={email}
          onChangeText={v => setValue('email', v, { shouldValidate: true })}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email?.message}
        />
      </View>

      <View style={styles.actions}>
        <AppButton
          label="Send Reset Link"
          onPress={handleSubmit(values =>
            navigation.navigate('VerificationEmail', {
              email: values.email,
              source: 'reset',
            }),
          )}
          variant="light"
          fullWidth
        />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  help: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontWeight: '800',
  },
  form: {
    flex: 1,
    gap: spacing.lg,
    paddingTop: spacing.lg,
  },
  actions: {
    gap: spacing.sm,
    paddingBottom: 30,
  },
});
