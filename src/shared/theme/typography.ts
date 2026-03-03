import { TextStyle } from 'react-native';

const segoe = 'Segoe UI';

export const typography = {
  families: {
    primary: segoe,
  },
  onboarding: {
    heading: {
      fontFamily: segoe,
      fontWeight: '700',
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.36,
      textAlign: 'center',
      color: '#F2F2F3', // Solid fallback for gradient text.
    } as TextStyle,
    headingEmphasis: {
      fontFamily: segoe,
      fontWeight: '700',
      fontSize: 28,
      lineHeight: 34,
      letterSpacing: 0.36,
      textAlign: 'center',
      color: '#A4A5A7',
    } as TextStyle,
    headingGradient: ['#F2F2F3', '#A4A5A7'] as const,
    description: {
      fontFamily: segoe,
      fontWeight: '400',
      fontSize: 17,
      lineHeight: 22,
      letterSpacing: -0.41,
      textAlign: 'center',
      color: '#DDDCDB',
    } as TextStyle,
  },
  branding: {
    appName: {
      fontFamily: segoe,
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 42,
      letterSpacing: 0,
      color: '#FFFFFF',
    } as TextStyle,
  },
};
