import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { ProfileSetupStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';
import { useProfileSetupStore } from '../../../state/profileSetupStore';
import { ProfileSetupLayout } from '../components/ProfileSetupLayout';

type Props = NativeStackScreenProps<ProfileSetupStackParamList, 'AdjustPhoto'>;

export function AdjustPhotoScreen({ navigation }: Props) {
  const completeProfileSetup = useSessionStore(state => state.completeProfileSetup);
  const photoUri = useProfileSetupStore(state => state.photoUri);
  const setPhotoUri = useProfileSetupStore(state => state.setPhotoUri);

  const pickFromLibrary = async () => {
    // Loaded lazily to avoid impacting tests / initial bundle evaluation.
    const ImagePicker = require('react-native-image-picker') as typeof import('react-native-image-picker');

    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      quality: 0.9,
    });

    const uri = result.assets?.[0]?.uri ?? null;
    if (uri) setPhotoUri(uri);
  };

  return (
    <ProfileSetupLayout title="Adjust Photo" onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <View style={styles.frame}>
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.image} resizeMode="cover" />
          ) : (
            <Pressable
              accessibilityRole="button"
              onPress={pickFromLibrary}
              style={styles.empty}
            >
              <Text style={styles.emptyText}>Tap to choose a photo</Text>
            </Pressable>
          )}
          <View pointerEvents="none" style={styles.grid}>
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={`v-${i}`} style={[styles.gridLineV, { left: `${((i + 1) * 25).toString()}%` }]} />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={`h-${i}`} style={[styles.gridLineH, { top: `${((i + 1) * 25).toString()}%` }]} />
            ))}
          </View>
        </View>

        <View style={styles.actions}>
          <AppButton
            label="Search"
            onPress={photoUri ? completeProfileSetup : pickFromLibrary}
            variant="light"
            fullWidth
          />
        </View>
      </View>
    </ProfileSetupLayout>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.xl,
  },
  frame: {
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    padding: spacing.lg,
    alignSelf: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  empty: {
    width: 250,
    height: 250,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 12,
    fontWeight: '700',
  },
  grid: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    top: spacing.lg,
    bottom: spacing.lg,
    borderRadius: 16,
    overflow: 'hidden',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    opacity: 0.8,
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    opacity: 0.8,
  },
  actions: {
    paddingBottom: 30,
    paddingHorizontal: spacing.sm,
  },
});
