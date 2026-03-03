import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { AuthField } from '../components/AuthField';
import { AuthLayout } from '../components/AuthLayout';
import { SignUpValues, signUpSchema } from '../validation';

type Props = NativeStackScreenProps<AuthStackParamList, 'SignUp'>;

export function SignUpScreen({ navigation }: Props) {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { email: 'John.doe@gmail.com', password: 'password', confirmPassword: 'password' },
    mode: 'onBlur',
  });

  const email = watch('email');
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Create an account to get started!"
      onBack={() => navigation.goBack()}
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
          label="Login Instead"
          onPress={() => navigation.navigate('Login')}
          variant="dark"
          fullWidth
        />
        <AppButton
          label="Create Account"
          onPress={handleSubmit(values =>
            navigation.navigate('VerificationEmail', {
              email: values.email,
              source: 'signup',
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
