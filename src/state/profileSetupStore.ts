import { create } from 'zustand';

export type Gender = 'male' | 'female' | 'other' | null;

type ProfileSetupState = {
  name: string;
  age: string;
  gender: Gender;
  bio: string;
  interests: string[];
  photoUri: string | null;

  setName: (name: string) => void;
  setAge: (age: string) => void;
  setGender: (gender: Gender) => void;
  setBio: (bio: string) => void;
  toggleInterest: (interest: string) => void;
  setPhotoUri: (photoUri: string | null) => void;
  reset: () => void;
};

const DEFAULT_INTERESTS = ['General', 'Food', 'Travel', 'Hiking', 'Sports', 'Photography'];

export const useProfileSetupStore = create<ProfileSetupState>(set => ({
  name: '',
  age: '',
  gender: null,
  bio: '',
  interests: [],
  photoUri: null,

  setName: name => set({ name }),
  setAge: age => set({ age: age.replace(/[^0-9]/g, '') }),
  setGender: gender => set({ gender }),
  setBio: bio => set({ bio }),
  toggleInterest: interest =>
    set(state => {
      const exists = state.interests.includes(interest);
      return {
        interests: exists
          ? state.interests.filter(x => x !== interest)
          : [...state.interests, interest],
      };
    }),
  setPhotoUri: photoUri => set({ photoUri }),
  reset: () =>
    set({
      name: '',
      age: '',
      gender: null,
      bio: '',
      interests: [],
      photoUri: null,
    }),
}));

export const profileSetupInterests = DEFAULT_INTERESTS;
