import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '../features/auth/screens/LoginScreen';
import { FallbackSignInFailedScreen } from '../features/auth/screens/FallbackSignInFailedScreen';
import { NewPasswordScreen } from '../features/auth/screens/NewPasswordScreen';
import { ResetPasswordScreen } from '../features/auth/screens/ResetPasswordScreen';
import { SignUpScreen } from '../features/auth/screens/SignUpScreen';
import { SuccessScreen } from '../features/auth/screens/SuccessScreen';
import { VerificationEmailScreen } from '../features/auth/screens/VerificationEmailScreen';
import { VerificationIntroScreen } from '../features/auth/screens/VerificationIntroScreen';
import { WelcomeExtendedScreen } from '../features/auth/screens/WelcomeExtendedScreen';
import { WelcomeScreen } from '../features/auth/screens/WelcomeScreen';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="WelcomeExtended" component={WelcomeExtendedScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="VerificationIntro" component={VerificationIntroScreen} />
      <Stack.Screen name="VerificationEmail" component={VerificationEmailScreen} />
      <Stack.Screen name="FallbackSignInFailed" component={FallbackSignInFailedScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
