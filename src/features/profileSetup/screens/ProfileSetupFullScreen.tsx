import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ProfileSetupStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { spacing } from '../../../shared/theme/spacing';
import { Gender, useProfileSetupStore } from '../../../state/profileSetupStore';
import { ProfileSetupLayout } from '../components/ProfileSetupLayout';
import { Pills } from '../components/Pills';
import { UnderlinedInput } from '../components/UnderlinedInput';

type Props = NativeStackScreenProps<ProfileSetupStackParamList, 'ProfileSetupFull'>;

export function ProfileSetupFullScreen({ navigation }: Props) {
  const name = useProfileSetupStore(state => state.name);
  const age = useProfileSetupStore(state => state.age);
  const gender = useProfileSetupStore(state => state.gender);
  const setName = useProfileSetupStore(state => state.setName);
  const setAge = useProfileSetupStore(state => state.setAge);
  const setGender = useProfileSetupStore(state => state.setGender);

  useEffect(() => {
    // Seeds the screen to match the provided "Full" UI reference.
    if (!name) setName('John Doe');
    if (!age) setAge('32');
    if (!gender) setGender('male');
  }, [age, gender, name, setAge, setGender, setName]);

  return (
    <ProfileSetupLayout
      title="The Basics"
      subtitle="This helps Claimy personalize your experience."
      onBack={() => navigation.goBack()}
    >
      <View style={styles.form}>
        <View style={styles.block}>
          <UnderlinedInput
            label="What should we call you?"
            value={name}
            onChangeText={setName}
            placeholder="Your Name"
          />
          <Text style={styles.helper}>You can edit this later in profile</Text>
        </View>

        <View style={styles.block}>
          <UnderlinedInput
            label="What should we call you?"
            value={age}
            onChangeText={setAge}
            placeholder="25"
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

        <View style={styles.actions}>
          <AppButton
            label="Finish Setup"
            onPress={() => navigation.navigate('ProfileSetupFullExtended')}
            variant="light"
            fullWidth
          />
        </View>
      </View>
    </ProfileSetupLayout>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    gap: spacing.lg,
  },
  block: {
    gap: 8,
  },
  helper: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 12,
  },
  actions: {
    marginTop: 'auto',
    paddingBottom: 30,
  },
});
