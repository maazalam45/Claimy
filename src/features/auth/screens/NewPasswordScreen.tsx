import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { AuthField } from '../components/AuthField';
import { AuthLayout } from '../components/AuthLayout';
import { NewPasswordValues, newPasswordSchema } from '../validation';

type Props = NativeStackScreenProps<AuthStackParamList, 'NewPassword'>;

export function NewPasswordScreen({ navigation }: Props) {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordValues>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: { password: 'password', confirmPassword: 'password' },
    mode: 'onBlur',
  });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <AuthLayout
      title="New Password"
      subtitle="Setup your new password"
      onBack={() => navigation.goBack()}
    >
      <View style={styles.form}>
        <AuthField
          label="Create Password"
          value={password}
          onChangeText={v => setValue('password', v, { shouldValidate: true })}
          secureTextEntry
          showToggle
          error={errors.password?.message}
        />
        <AuthField
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={v => setValue('confirmPassword', v, { shouldValidate: true })}
          secureTextEntry
          showToggle
          error={errors.confirmPassword?.message}
        />
      </View>

      <View style={styles.actions}>
        <AppButton
          label="Create New Password"
          onPress={handleSubmit(() => navigation.navigate('Login'))}
          variant="light"
          fullWidth
        />
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
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
