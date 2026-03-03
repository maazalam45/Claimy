import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ProfileSetupStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { Gender, profileSetupInterests, useProfileSetupStore } from '../../../state/profileSetupStore';
import { Chips } from '../components/Chips';
import { ProfileSetupLayout } from '../components/ProfileSetupLayout';
import { Pills } from '../components/Pills';
import { UnderlinedInput } from '../components/UnderlinedInput';

type Props = NativeStackScreenProps<ProfileSetupStackParamList, 'ProfileSetupFullExtended'>;

export function ProfileSetupFullExtendedScreen({ navigation }: Props) {
  const name = useProfileSetupStore(state => state.name);
  const age = useProfileSetupStore(state => state.age);
  const gender = useProfileSetupStore(state => state.gender);
  const bio = useProfileSetupStore(state => state.bio);
  const interests = useProfileSetupStore(state => state.interests);
  const setName = useProfileSetupStore(state => state.setName);
  const setAge = useProfileSetupStore(state => state.setAge);
  const setGender = useProfileSetupStore(state => state.setGender);
  const setBio = useProfileSetupStore(state => state.setBio);
  const toggleInterest = useProfileSetupStore(state => state.toggleInterest);

  return (
    <ProfileSetupLayout
      title="Complete Profile"
      subtitle="Personalize your experience."
      onBack={() => navigation.goBack()}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.block}>
          <UnderlinedInput
            label="What should we call you?"
            value={name}
            onChangeText={setName}
            placeholder="John Doe"
          />
          <Text style={styles.helper}>You can edit this later in profile</Text>
        </View>

        <View style={styles.block}>
          <UnderlinedInput
            label="What should we call you?"
            value={age}
            onChangeText={setAge}
            placeholder="32"
            keyboardType="numeric"
          />
        </View>

        <Pills<Exclude<Gender, null>>
          value={gender ?? null}
          onChange={value => setGender(value)}
          options={[
            { key: 'male', label: 'Male' },
            { key: 'female', label: 'Female' },
            { key: 'other', label: 'Other' },
          ]}
        />

        <View style={styles.block}>
          <UnderlinedInput
            label="Bio"
            value={bio}
            onChangeText={setBio}
            placeholder="Tell us about yourself"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.interestsHeader}>
          <Text style={styles.interestsLabel}>INTERESTS</Text>
        </View>
        <Chips values={interests} onToggle={toggleInterest} options={profileSetupInterests} />

        <View style={styles.bottomSpace} />
      </ScrollView>

      <View style={styles.actions}>
        <AppButton
          label="Finish Setup"
          onPress={() => navigation.navigate('ProfileSetupSuccess')}
          variant="light"
          fullWidth
        />
      </View>
    </ProfileSetupLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },
  block: {
    gap: 8,
  },
  helper: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 12,
  },
  interestsHeader: {
    marginTop: spacing.sm,
  },
  interestsLabel: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  bottomSpace: {
    height: spacing.xl,
  },
  actions: {
    paddingBottom: 30,
  },
});
