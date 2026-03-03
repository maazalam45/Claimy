import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'NoMatches'>;

export function NoMatchesScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.topBar}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          <View style={styles.creditsPill}>
            <Text style={styles.creditsText}>3 credits</Text>
          </View>
        </View>

        <View style={styles.center}>
          <View style={styles.iconOuter}>
            <Text style={styles.icon}>⌕</Text>
          </View>
          <Text style={styles.title}>No matches found</Text>
          <Text style={styles.subtitle}>
            Try another photo or use a clear, front-facing photo for best results
          </Text>
        </View>

        <View style={styles.actions}>
          <Pressable accessibilityRole="button" style={styles.cta} onPress={() => navigation.navigate('FaceSearch')}>
            <Text style={styles.ctaText}>Search Another Photo</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            style={styles.alt}
            onPress={() => navigation.navigate('PremiumUpsell')}
          >
            <Text style={styles.altText}>Upgrade Search</Text>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  creditsPill: {
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(56,255,178,0.2)',
    backgroundColor: 'rgba(56,255,178,0.08)',
  },
  creditsText: { color: '#30D987', fontSize: 12, fontWeight: '700' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: spacing.lg },
  iconOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { color: '#FF4C62', fontSize: 44 / 2, fontWeight: '900' },
  title: { marginTop: spacing.lg, color: colors.white, fontSize: 24 * 1.7 / 2, fontWeight: '900' },
  subtitle: { marginTop: spacing.sm, color: 'rgba(255,255,255,0.72)', fontSize: 34 / 2, textAlign: 'center', lineHeight: 24 },
  actions: { paddingBottom: 26, gap: spacing.sm },
  cta: { borderRadius: 14, backgroundColor: colors.white, paddingVertical: spacing.md, alignItems: 'center' },
  ctaText: { color: colors.black, fontSize: 16, fontWeight: '700' },
  alt: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    backgroundColor: 'rgba(255,255,255,0.06)',
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  altText: { color: colors.white, fontSize: 15, fontWeight: '700' },
});
