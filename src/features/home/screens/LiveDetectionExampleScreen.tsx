import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';

type Props = NativeStackScreenProps<HomeStackParamList, 'LiveDetectionExample'>;

const steps = [
  { title: 'Smile!', subtitle: 'Follow instructions to get verified' },
  { title: 'Turn Left', subtitle: 'Slowly turn your head to the left' },
  { title: 'Turn Right', subtitle: 'Now slowly turn your head to the right' },
  { title: 'Hold Still', subtitle: 'Keep your face centered for capture' },
];

export function LiveDetectionExampleScreen({ navigation }: Props) {
  const [stepIndex, setStepIndex] = useState(0);
  const submitIdentityVerification = useSessionStore(state => state.submitIdentityVerification);

  const current = useMemo(() => steps[stepIndex], [stepIndex]);
  const isLast = stepIndex === steps.length - 1;

  const onContinue = () => {
    if (!isLast) {
      setStepIndex(index => index + 1);
      return;
    }

    submitIdentityVerification();
    navigation.replace('AdminVerification');
  };

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.topRow}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          <Text style={styles.progress}>{`${stepIndex + 1}/${steps.length}`}</Text>
        </View>

        <View style={styles.faceWrap}>
          <View style={styles.faceCircle} />
        </View>

        <View style={styles.livePill}>
          <Text style={styles.livePillText}>LIVE CHECK</Text>
        </View>

        <Text style={styles.title}>{current.title}</Text>
        <Text style={styles.subtitle}>{current.subtitle}</Text>

        <View style={styles.dots}>
          {steps.map((_, idx) => (
            <View key={idx} style={[styles.dot, idx === stepIndex && styles.dotActive]} />
          ))}
        </View>

        <View style={styles.actions}>
          <AppButton
            label={isLast ? 'Complete Verification' : 'Next Step'}
            variant="light"
            fullWidth
            onPress={onContinue}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  topRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progress: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    fontWeight: '700',
  },
  faceWrap: {
    marginTop: spacing.xl,
    width: 252,
    height: 252,
    borderRadius: 126,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8AA0FF',
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 0 },
  },
  faceCircle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#C9C1B6',
  },
  livePill: {
    marginTop: spacing.md,
    borderRadius: 13,
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
  },
  livePillText: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    letterSpacing: 1,
    fontWeight: '800',
  },
  title: {
    marginTop: spacing.md,
    color: colors.white,
    fontSize: 42 / 2,
    fontWeight: '900',
  },
  subtitle: {
    marginTop: 6,
    color: 'rgba(255,255,255,0.55)',
    fontSize: 14,
    textAlign: 'center',
  },
  dots: {
    marginTop: spacing.lg,
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.28)',
  },
  dotActive: {
    width: 22,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  actions: {
    marginTop: 'auto',
    width: '100%',
    paddingBottom: 28,
  },
});
