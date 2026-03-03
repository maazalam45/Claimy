import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AdjustPhotoScreen } from '../features/profileSetup/screens/AdjustPhotoScreen';
import { ProfileSetupFullExtendedScreen } from '../features/profileSetup/screens/ProfileSetupFullExtendedScreen';
import { ProfileSetupFullScreen } from '../features/profileSetup/screens/ProfileSetupFullScreen';
import { ProfileSetupNullScreen } from '../features/profileSetup/screens/ProfileSetupNullScreen';
import { ProfileSetupSuccessScreen } from '../features/profileSetup/screens/ProfileSetupSuccessScreen';
import { ProfileSetupStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileSetupStackParamList>();

export function ProfileSetupNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileSetupNull" component={ProfileSetupNullScreen} />
      <Stack.Screen name="ProfileSetupFull" component={ProfileSetupFullScreen} />
      <Stack.Screen name="ProfileSetupFullExtended" component={ProfileSetupFullExtendedScreen} />
      <Stack.Screen name="ProfileSetupSuccess" component={ProfileSetupSuccessScreen} />
      <Stack.Screen name="AdjustPhoto" component={AdjustPhotoScreen} />
    </Stack.Navigator>
  );
}
