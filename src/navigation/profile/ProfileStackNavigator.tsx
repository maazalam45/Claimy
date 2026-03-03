import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';
import { ProfileStackParamList } from '../types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
