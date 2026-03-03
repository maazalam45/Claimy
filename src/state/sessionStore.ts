import { create } from 'zustand';

type SessionState = {
  hasSeenOnboarding: boolean;
  isAuthenticated: boolean;
  isProfileSetupComplete: boolean;
  isIdentityVerified: boolean;
  isIdentityVerificationPending: boolean;
  hasClaimedPerson: boolean;
  completeOnboarding: () => void;
  signIn: () => void;
  completeSignup: () => void;
  signOut: () => void;
  completeProfileSetup: () => void;
  completeIdentityVerification: () => void;
  submitIdentityVerification: () => void;
  claimPerson: () => void;
  unclaimPerson: () => void;
};

export const useSessionStore = create<SessionState>(set => ({
  hasSeenOnboarding: false,
  isAuthenticated: false,
  isProfileSetupComplete: false,
  isIdentityVerified: false,
  isIdentityVerificationPending: false,
  hasClaimedPerson: false,
  completeOnboarding: () => set({ hasSeenOnboarding: true }),
  signIn: () => set(state => ({ isAuthenticated: true, isProfileSetupComplete: state.isProfileSetupComplete })),
  completeSignup: () => set({ isAuthenticated: true, isProfileSetupComplete: false }),
  completeProfileSetup: () => set({ isProfileSetupComplete: true }),
  submitIdentityVerification: () => set({ isIdentityVerificationPending: true }),
  completeIdentityVerification: () => set({ isIdentityVerified: true, isIdentityVerificationPending: false }),
  claimPerson: () => set({ hasClaimedPerson: true }),
  unclaimPerson: () => set({ hasClaimedPerson: false }),
  signOut: () =>
    set({
      isAuthenticated: false,
      isProfileSetupComplete: false,
      isIdentityVerified: false,
      isIdentityVerificationPending: false,
      hasClaimedPerson: false,
    }),
}));
