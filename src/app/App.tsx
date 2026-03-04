import { StatusBar, Text, TextInput } from 'react-native';

import { AppProviders } from './providers/AppProviders';
import { RootNavigator } from '../navigation/RootNavigator';

const GLOBAL_FONT_FAMILY = 'Segoe UI';

if (!Text.defaultProps) {
  Text.defaultProps = {};
}

if (!TextInput.defaultProps) {
  TextInput.defaultProps = {};
}

Text.defaultProps = {
  ...Text.defaultProps,
  style: [{ fontFamily: GLOBAL_FONT_FAMILY }, Text.defaultProps.style],
};

TextInput.defaultProps = {
  ...TextInput.defaultProps,
  style: [{ fontFamily: GLOBAL_FONT_FAMILY }, TextInput.defaultProps.style],
};

export function App() {
  return (
    <AppProviders>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <RootNavigator />
    </AppProviders>
  );
}
