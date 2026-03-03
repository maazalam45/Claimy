import { useEffect, useState } from 'react';

import { SplashScreen } from '../features/auth/screens/SplashScreen';
import { AuthNavigator } from './AuthNavigator';
import { OnboardingNavigator } from './OnboardingNavigator';
import { ProfileSetupNavigator } from './ProfileSetupNavigator';
import { MainNavigator } from './MainNavigator';
import { useSessionStore } from '../state/sessionStore';

export function RootNavigator() {
  const [showSplash, setShowSplash] = useState(true);
  const hasSeenOnboarding = useSessionStore(state => state.hasSeenOnboarding);
  const isAuthenticated = useSessionStore(state => state.isAuthenticated);
  const isProfileSetupComplete = useSessionStore(state => state.isProfileSetupComplete);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1300);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (!hasSeenOnboarding) {
    return <OnboardingNavigator />;
  }

  if (!isAuthenticated) {
    return <AuthNavigator />;
  }

  if (!isProfileSetupComplete) {
    return <ProfileSetupNavigator />;
  }

  return <MainNavigator />;
}
