import { NavigatorScreenParams } from '@react-navigation/native';

export type OnboardingStackParamList = {
  Onboarding: undefined;
};

export type AuthStackParamList = {
  Welcome: undefined;
  WelcomeExtended: undefined;
  Login: undefined;
  SignUp: undefined;
  ResetPassword: undefined;
  NewPassword: undefined;
  VerificationIntro: undefined;
  VerificationEmail: { email: string; source: 'signup' | 'reset' };
  FallbackSignInFailed: undefined;
  Success: undefined;
};

export type ProfileSetupStackParamList = {
  ProfileSetupNull: undefined;
  ProfileSetupFull: undefined;
  ProfileSetupFullExtended: undefined;
  AdjustPhoto: undefined;
  ProfileSetupSuccess: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  HomeAllCardTypes: undefined;
  VerifyReal: undefined;
  LiveDetectionExample: undefined;
  AdminVerification: undefined;
};

export type ClaimStackParamList = {
  FaceSearch: undefined;
  ScanQR: undefined;
  LoadingRipple: { mode: 'face' | 'qr' };
  Matches: undefined;
  NoMatches: undefined;
  PrivateClaimed: undefined;
  PremiumUpsell: undefined;
  PurchaseSuccess: undefined;
  PurchaseError: undefined;
  ClaimQRCode: { statusTitle: string };
  ClaimExtended: undefined;
  ClaimInsightsDate: undefined;
  ClaimInsightsToday: undefined;
  StatusChangeModal: undefined;
  ReminderModal: undefined;
  PrivatiseModal: undefined;
  UnclaimModal: undefined;
  Claim: undefined;
  Claim1: undefined;
  Claim2: undefined;
  Status: undefined;
};

export type ChatStackParamList = {
  Chat: undefined;
  ChatNull: undefined;
  ChatThread: { name: string };
  ChatCardOptions: undefined;
  ChatYourAnswer: undefined;
  ChatReport: undefined;
  ChatHideSuggestion: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ClaimTab: NavigatorScreenParams<ClaimStackParamList>;
  ChatTab: NavigatorScreenParams<ChatStackParamList>;
  ProfileTab: NavigatorScreenParams<ProfileStackParamList>;
};

export type ShareStackParamList = {
  Share: undefined;
  Share1: undefined;
  Share2: undefined;
  Share3: undefined;
  Share4: undefined;
  QRCode: undefined;
};

export type MainStackParamList = {
  Tabs: NavigatorScreenParams<MainTabParamList>;
  ShareFlow: NavigatorScreenParams<ShareStackParamList>;
};
