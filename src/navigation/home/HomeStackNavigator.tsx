import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AdminVerificationScreen } from '../../features/home/screens/AdminVerificationScreen';
import { HomeAllCardTypesScreen } from '../../features/home/screens/HomeAllCardTypesScreen';
import { HomeScreen } from '../../features/home/screens/HomeScreen';
import { LiveDetectionExampleScreen } from '../../features/home/screens/LiveDetectionExampleScreen';
import { VerifyRealScreen } from '../../features/home/screens/VerifyRealScreen';
import { HomeStackParamList } from '../types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeAllCardTypes" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeAllCardTypes" component={HomeAllCardTypesScreen} />
      <Stack.Screen name="VerifyReal" component={VerifyRealScreen} />
      <Stack.Screen name="LiveDetectionExample" component={LiveDetectionExampleScreen} />
      <Stack.Screen name="AdminVerification" component={AdminVerificationScreen} />
    </Stack.Navigator>
  );
}
