import { StatusBar } from 'react-native';

import { AppProviders } from './providers/AppProviders';
import { RootNavigator } from '../navigation/RootNavigator';

export function App() {
  return (
    <AppProviders>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <RootNavigator />
    </AppProviders>
  );
}
