import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainStackParamList } from './types';
import { MainTabsNavigator } from './MainTabsNavigator';
import { ShareNavigator } from './share/ShareNavigator';

const Stack = createNativeStackNavigator<MainStackParamList>();

export function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={MainTabsNavigator} />
      <Stack.Screen
        name="ShareFlow"
        component={ShareNavigator}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}
