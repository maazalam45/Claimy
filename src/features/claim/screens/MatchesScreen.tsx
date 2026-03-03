import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'Matches'>;

const people = [
  { id: '1', name: 'Jane Doe', details: '25 • Female', match: '98% Match', tint: 'rgba(42,209,140,0.16)' },
  { id: '2', name: 'Alexander Nate', details: '32 • Male', match: '70% Match', tint: 'rgba(255,190,50,0.16)' },
  { id: '3', name: 'Michelle Broome', details: '28 • Female', match: '40% Match', tint: 'rgba(255,76,120,0.16)' },
];

export function MatchesScreen({ navigation }: Props) {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.topBar}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Results</Text>
          <View style={styles.creditsPill}>
            <Text style={styles.creditsText}>3 credits</Text>
          </View>
        </View>

        <GlassCard style={styles.searchWrap}>
          <TextInput
            placeholder="Search results..."
            placeholderTextColor="rgba(255,255,255,0.45)"
            style={styles.searchInput}
          />
        </GlassCard>
        <Text style={styles.meta}>Found 3 matches</Text>

        <View style={styles.list}>
          {people.map(person => (
            <Pressable
              key={person.id}
              accessibilityRole="button"
              onPress={() => navigation.navigate('Claim2')}
            >
              <GlassCard style={[styles.resultCard, { backgroundColor: person.tint }]}>
                <View>
                  <Text style={styles.name}>{person.name}</Text>
                  <Text style={styles.details}>
                    {person.details} • <Text style={styles.match}>{person.match}</Text>
                  </Text>
                </View>
                <View style={styles.avatar} />
              </GlassCard>
            </Pressable>
          ))}
        </View>

        <GlassCard style={styles.toggleCard}>
          <Text style={styles.toggleLabel}>Publicly Claimed Only</Text>
          <Switch value trackColor={{ false: '#444', true: '#2BE08E' }} thumbColor={colors.white} />
        </GlassCard>

        <Pressable
          accessibilityRole="button"
          style={styles.secondary}
          onPress={() => navigation.navigate('NoMatches')}
        >
          <Text style={styles.secondaryText}>Search Another Photo</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: spacing.lg, paddingTop: spacing.lg },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { color: colors.white, fontSize: 42 / 2, fontWeight: '900' },
  creditsPill: {
    borderRadius: 14,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: 'rgba(56,255,178,0.2)',
    backgroundColor: 'rgba(56,255,178,0.08)',
  },
  creditsText: { color: '#30D987', fontSize: 12, fontWeight: '700' },
  searchWrap: { marginTop: spacing.md, borderRadius: 12, paddingHorizontal: spacing.sm, paddingVertical: 2 },
  searchInput: { color: colors.white, fontSize: 14 },
  meta: { marginTop: 8, color: 'rgba(255,255,255,0.6)', fontSize: 12 },
  list: { marginTop: spacing.sm, gap: spacing.sm },
  resultCard: {
    borderRadius: 14,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: { color: colors.white, fontSize: 18 / 1.1, fontWeight: '900' },
  details: { marginTop: 2, color: 'rgba(255,255,255,0.7)', fontSize: 12 },
  match: { color: '#4CFF95', fontWeight: '800' },
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: 'rgba(255,255,255,0.75)' },
  toggleCard: {
    marginTop: spacing.lg,
    borderRadius: 14,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleLabel: { color: colors.white, fontSize: 14, fontWeight: '700' },
  secondary: {
    marginTop: spacing.lg,
    borderRadius: 14,
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  secondaryText: { color: colors.black, fontSize: 16, fontWeight: '700' },
});
