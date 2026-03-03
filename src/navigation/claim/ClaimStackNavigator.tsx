import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Claim1Screen } from '../../features/claim/screens/Claim1Screen';
import { Claim2Screen } from '../../features/claim/screens/Claim2Screen';
import { ClaimExtendedScreen } from '../../features/claim/screens/ClaimExtendedScreen';
import { ClaimInsightsDateScreen } from '../../features/claim/screens/ClaimInsightsDateScreen';
import { ClaimInsightsTodayScreen } from '../../features/claim/screens/ClaimInsightsTodayScreen';
import { ClaimQRCodeScreen } from '../../features/claim/screens/ClaimQRCodeScreen';
import { ClaimScreen } from '../../features/claim/screens/ClaimScreen';
import { FaceSearchScreen } from '../../features/claim/screens/FaceSearchScreen';
import { LoadingRippleScreen } from '../../features/claim/screens/LoadingRippleScreen';
import { MatchesScreen } from '../../features/claim/screens/MatchesScreen';
import { NoMatchesScreen } from '../../features/claim/screens/NoMatchesScreen';
import { PrivateClaimedScreen } from '../../features/claim/screens/PrivateClaimedScreen';
import { PremiumUpsellScreen } from '../../features/claim/screens/PremiumUpsellScreen';
import { PurchaseErrorScreen } from '../../features/claim/screens/PurchaseErrorScreen';
import { PurchaseSuccessScreen } from '../../features/claim/screens/PurchaseSuccessScreen';
import { PrivatiseModalScreen } from '../../features/claim/screens/PrivatiseModalScreen';
import { ReminderModalScreen } from '../../features/claim/screens/ReminderModalScreen';
import { ScanQRScreen } from '../../features/claim/screens/ScanQRScreen';
import { StatusScreen } from '../../features/claim/screens/StatusScreen';
import { StatusChangeModalScreen } from '../../features/claim/screens/StatusChangeModalScreen';
import { UnclaimModalScreen } from '../../features/claim/screens/UnclaimModalScreen';
import { ClaimStackParamList } from '../types';

const Stack = createNativeStackNavigator<ClaimStackParamList>();

export function ClaimStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Claim" component={ClaimScreen} />
      <Stack.Screen name="ClaimExtended" component={ClaimExtendedScreen} />
      <Stack.Screen name="ClaimInsightsDate" component={ClaimInsightsDateScreen} />
      <Stack.Screen name="ClaimInsightsToday" component={ClaimInsightsTodayScreen} />
      <Stack.Screen name="FaceSearch" component={FaceSearchScreen} />
      <Stack.Screen name="ScanQR" component={ScanQRScreen} />
      <Stack.Screen name="LoadingRipple" component={LoadingRippleScreen} />
      <Stack.Screen name="Matches" component={MatchesScreen} />
      <Stack.Screen name="NoMatches" component={NoMatchesScreen} />
      <Stack.Screen name="PremiumUpsell" component={PremiumUpsellScreen} />
      <Stack.Screen name="PurchaseSuccess" component={PurchaseSuccessScreen} />
      <Stack.Screen name="PurchaseError" component={PurchaseErrorScreen} />
      <Stack.Screen name="Claim1" component={Claim1Screen} />
      <Stack.Screen name="Claim2" component={Claim2Screen} />
      <Stack.Screen name="Status" component={StatusScreen} />
      <Stack.Screen name="ClaimQRCode" component={ClaimQRCodeScreen} />
      <Stack.Screen
        name="StatusChangeModal"
        component={StatusChangeModalScreen}
        options={{ presentation: 'transparentModal', animation: 'slide_from_bottom', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="ReminderModal"
        component={ReminderModalScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="PrivatiseModal"
        component={PrivatiseModalScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="UnclaimModal"
        component={UnclaimModalScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="PrivateClaimed"
        component={PrivateClaimedScreen}
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          contentStyle: { backgroundColor: 'transparent' },
        }}
      />
    </Stack.Navigator>
  );
}
