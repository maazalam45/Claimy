import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../shared/theme/colors';
import { useSessionStore } from '../state/sessionStore';
import { MainTabParamList } from './types';
import { ChatStackNavigator } from './chat/ChatStackNavigator';
import { ClaimStackNavigator } from './claim/ClaimStackNavigator';
import { HomeStackNavigator } from './home/HomeStackNavigator';
import { ProfileStackNavigator } from './profile/ProfileStackNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();

function TabGlyph({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: string;
  label: string;
}) {
  return (
    <View style={styles.tabCell}>
      <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
        <Text style={[styles.iconText, focused && styles.iconTextActive]}>{icon}</Text>
      </View>
      <Text style={[styles.label, focused && styles.labelActive]}>{label}</Text>
    </View>
  );
}

function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const hasClaimedPerson = useSessionStore.getState().hasClaimedPerson;
  const isFocused = (name: keyof MainTabParamList) =>
    state.routes[state.index]?.name === name;
  const activeRoute = state.routes[state.index];
  const nestedState = activeRoute.state as { index: number; routes: Array<{ name: string }> } | undefined;
  const activeNestedRouteName = nestedState?.routes?.[nestedState.index ?? 0]?.name;

  if (
    activeRoute.name === 'ChatTab' ||
    activeNestedRouteName === 'FaceSearch' ||
    activeNestedRouteName === 'ScanQR' ||
    activeNestedRouteName === 'LoadingRipple' ||
    activeNestedRouteName === 'Matches' ||
    activeNestedRouteName === 'NoMatches' ||
    activeNestedRouteName === 'PremiumUpsell' ||
    activeNestedRouteName === 'PurchaseSuccess' ||
    activeNestedRouteName === 'PurchaseError' ||
    activeNestedRouteName === 'ClaimQRCode' ||
    activeNestedRouteName === 'VerifyReal' ||
    activeNestedRouteName === 'LiveDetectionExample' ||
    activeNestedRouteName === 'AdminVerification'
  ) {
    return null;
  }

  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <View style={styles.leftPill}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Home tab"
          onPress={() => navigation.navigate('HomeTab', { screen: 'HomeAllCardTypes' })}
          style={styles.press}
        >
          <TabGlyph focused={isFocused('HomeTab')} icon="⌂" label="Home" />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Chat tab"
          onPress={() => navigation.navigate('ChatTab', { screen: hasClaimedPerson ? 'Chat' : 'ChatNull' })}
          style={styles.press}
        >
          <TabGlyph focused={isFocused('ChatTab')} icon="◯" label="Chat" />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Claim tab"
          onPress={() =>
            navigation.navigate(
              'ClaimTab',
              (hasClaimedPerson
                ? { screen: 'ClaimQRCode', params: { statusTitle: 'Talking Stage' } }
                : { screen: 'Status' }) as never,
            )
          }
          style={styles.press}
        >
          <TabGlyph focused={isFocused('ClaimTab')} icon="⟲" label="Claim" />
        </Pressable>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Profile tab"
        onPress={() => navigation.navigate('ProfileTab', { screen: 'Profile' })}
        style={[styles.profileOrb, isFocused('ProfileTab') && styles.profileOrbActive]}
      >
        <Text style={[styles.profileGlyph, isFocused('ProfileTab') && styles.profileGlyphActive]}>⌘</Text>
      </Pressable>
    </View>
  );
}

export function MainTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={CustomTabBar}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="ClaimTab" component={ClaimStackNavigator} />
      <Tab.Screen
        name="ChatTab"
        component={ChatStackNavigator}
        options={{ popToTopOnBlur: true }}
      />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftPill: {
    height: 70,
    width: '76%',
    borderRadius: 35,
    backgroundColor: 'rgba(9,9,12,0.95)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  press: {
    flex: 1,
    alignItems: 'center',
  },
  tabCell: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.10)',
  },
  iconText: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.52)',
    fontWeight: '700',
  },
  iconTextActive: {
    color: colors.white,
  },
  label: {
    fontSize: 16 / 1.2,
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '500',
  },
  labelActive: {
    color: colors.white,
  },
  profileOrb: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(9,9,12,0.95)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileOrbActive: {
    borderColor: 'rgba(255,255,255,0.18)',
  },
  profileGlyph: {
    fontSize: 23,
    color: 'rgba(255,255,255,0.7)',
  },
  profileGlyphActive: {
    color: colors.white,
  },
});
