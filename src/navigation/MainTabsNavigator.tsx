import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { BinocularsMenuIcon, ChatMenuIcon, HomeMenuIcon } from '../shared/components/AppIcons';
import { ClaimyLogoMark } from '../shared/components/ClaimyLogoMark';
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
  icon: ReactNode;
  label: string;
}) {
  return (
    <View style={[styles.tabCell, focused && styles.tabCellActive]}>
      <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
        {icon}
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
          <TabGlyph
            focused={isFocused('HomeTab')}
            icon={<HomeMenuIcon size={16} color={isFocused('HomeTab') ? '#FFFFFF' : 'rgba(255,255,255,0.52)'} />}
            label="Home"
          />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Chat tab"
          onPress={() => navigation.navigate('ChatTab', { screen: hasClaimedPerson ? 'Chat' : 'ChatNull' })}
          style={styles.press}
        >
          <TabGlyph
            focused={isFocused('ChatTab')}
            icon={<ChatMenuIcon size={16} color={isFocused('ChatTab') ? '#FFFFFF' : 'rgba(255,255,255,0.52)'} />}
            label="Chat"
          />
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
          <TabGlyph
            focused={isFocused('ClaimTab')}
            icon={<ClaimTabIcon focused={isFocused('ClaimTab')} />}
            label="Claim"
          />
        </Pressable>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Profile tab"
        onPress={() => navigation.navigate('ProfileTab', { screen: 'Profile' })}
        style={[styles.profileOrb, isFocused('ProfileTab') && styles.profileOrbActive]}
      >
        <BinocularsMenuIcon
          size={24}
          color={isFocused('ProfileTab') ? '#FFFFFF' : 'rgba(255,255,255,0.7)'}
        />
      </Pressable>
    </View>
  );
}

function ClaimTabIcon({ focused }: { focused: boolean }) {
  return (
    <View style={styles.claimIconWrap}>
      <ClaimyLogoMark size={16} color={focused ? '#FFFFFF' : 'rgba(255,255,255,0.52)'} />
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
    bottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftPill: {
    height: 70,
    width: '76%',
    borderRadius: 65,
    backgroundColor: 'rgba(16,16,16,1)',
    borderWidth: 1,
    borderColor: 'rgba(53,52,54,1)',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    shadowColor: '#131313',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  press: {
    flex: 1,
    alignItems: 'center',
  },
  tabCell: {
    width: 75.67,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingTop: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  tabCellActive: {
    backgroundColor: '#4E4E4E',
    borderColor: '#595959',
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapActive: {
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 16 / 1.2,
    color: 'rgba(255,255,255,0.72)',
    fontWeight: '400',
  },
  labelActive: {
    color: colors.white,
    fontWeight: '600',
  },
  profileOrb: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(16,16,16,1)',
    borderWidth: 1,
    borderColor: 'rgba(53,52,54,1)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#131313',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 6,
  },
  profileOrbActive: {
    borderColor: '#595959',
    backgroundColor: '#4E4E4E',
  },
  claimIconWrap: {
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
