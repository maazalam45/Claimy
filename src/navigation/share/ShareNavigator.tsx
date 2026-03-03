import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { QRCodeScreen } from '../../features/qr/screens/QRCodeScreen';
import { Share1Screen } from '../../features/share/screens/Share1Screen';
import { Share2Screen } from '../../features/share/screens/Share2Screen';
import { Share3Screen } from '../../features/share/screens/Share3Screen';
import { Share4Screen } from '../../features/share/screens/Share4Screen';
import { ShareScreen } from '../../features/share/screens/ShareScreen';
import { ShareStackParamList } from '../types';

const Stack = createNativeStackNavigator<ShareStackParamList>();

export function ShareNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Share" component={ShareScreen} />
      <Stack.Screen name="Share1" component={Share1Screen} />
      <Stack.Screen name="Share2" component={Share2Screen} />
      <Stack.Screen name="Share3" component={Share3Screen} />
      <Stack.Screen name="Share4" component={Share4Screen} />
      <Stack.Screen name="QRCode" component={QRCodeScreen} />
    </Stack.Navigator>
  );
}
