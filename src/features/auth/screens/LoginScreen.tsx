import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AuthStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';
import { AuthField } from '../components/AuthField';
import { AuthLayout } from '../components/AuthLayout';
import { LoginValues, loginSchema } from '../validation';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export function LoginScreen({ navigation }: Props) {
  const signIn = useSessionStore(state => state.signIn);

  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: 'John.doe@gmail.com', password: 'password' },
    mode: 'onBlur',
  });

  const email = watch('email');
  const password = watch('password');

  return (
    <AuthLayout
      title="Login"
      subtitle="Jump right back into your account."
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
          label="Password"
          value={password}
          onChangeText={v => setValue('password', v, { shouldValidate: true })}
          secureTextEntry
          showToggle
          error={errors.password?.message}
        />

        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('ResetPassword')}
          hitSlop={10}
        >
          <Text style={styles.link}>Reset Password</Text>
        </Pressable>
      </View>

      <View style={styles.actions}>
        <AppButton
          label="Create an Account"
          onPress={() => navigation.navigate('SignUp')}
          variant="dark"
          fullWidth
        />
        <AppButton
          label="Login"
          onPress={handleSubmit(values => {
            if (values.email.toLowerCase().includes('fail')) {
              navigation.navigate('FallbackSignInFailed');
              return;
            }
            signIn();
          })}
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
  link: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  actions: {
    gap: spacing.sm,
    paddingBottom: 30,
  },
});
