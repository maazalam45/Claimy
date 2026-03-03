import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'LoadingRipple'>;

export function LoadingRippleScreen({ navigation }: Props) {
  useEffect(() => {
    const t = setTimeout(() => {
      navigation.replace('Matches');
    }, 1200);

    return () => clearTimeout(t);
  }, [navigation]);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.ringOuter}>
          <View style={styles.ringMid}>
            <View style={styles.avatar} />
          </View>
        </View>
        <Text style={styles.title}>Analyzing faces...</Text>
        <Text style={styles.subtitle}>Searching through verified profiles</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.xl },
  ringOuter: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.38)',
  },
  ringMid: {
    width: 98,
    height: 98,
    borderRadius: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.58)',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#D9D5CC',
  },
  title: { marginTop: spacing.lg, color: colors.white, fontSize: 48 / 2, fontWeight: '900' },
  subtitle: { marginTop: 6, color: 'rgba(255,255,255,0.7)', fontSize: 34 / 2, textAlign: 'center' },
});
