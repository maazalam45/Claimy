import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChatNullScreen } from '../../features/chat/screens/ChatNullScreen';
import { ChatCardOptionsScreen } from '../../features/chat/screens/ChatCardOptionsScreen';
import { ChatHideSuggestionScreen } from '../../features/chat/screens/ChatHideSuggestionScreen';
import { ChatReportScreen } from '../../features/chat/screens/ChatReportScreen';
import { ChatScreen } from '../../features/chat/screens/ChatScreen';
import { ChatThreadScreen } from '../../features/chat/screens/ChatThreadScreen';
import { ChatYourAnswerScreen } from '../../features/chat/screens/ChatYourAnswerScreen';
import { useSessionStore } from '../../state/sessionStore';
import { ChatStackParamList } from '../types';

const Stack = createNativeStackNavigator<ChatStackParamList>();

export function ChatStackNavigator() {
  const hasClaimedPerson = useSessionStore(state => state.hasClaimedPerson);

  return (
    <Stack.Navigator
      key={hasClaimedPerson ? 'claimed-chat' : 'unclaimed-chat'}
      initialRouteName={hasClaimedPerson ? 'Chat' : 'ChatNull'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="ChatNull" component={ChatNullScreen} />
      <Stack.Screen name="ChatThread" component={ChatThreadScreen} />
      <Stack.Screen
        name="ChatCardOptions"
        component={ChatCardOptionsScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="ChatYourAnswer"
        component={ChatYourAnswerScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="ChatReport"
        component={ChatReportScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
      <Stack.Screen
        name="ChatHideSuggestion"
        component={ChatHideSuggestionScreen}
        options={{ presentation: 'transparentModal', animation: 'fade', contentStyle: { backgroundColor: 'transparent' } }}
      />
    </Stack.Navigator>
  );
}
