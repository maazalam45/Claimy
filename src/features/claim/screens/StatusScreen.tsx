import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';

type Props = NativeStackScreenProps<ClaimStackParamList, 'Status'>;

type StatusOption = {
  key: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
};

const options: StatusOption[] = [
  { key: 'talking', title: 'Talking Stage', subtitle: 'Getting to know each other', icon: '◌', color: '#B15CFF' },
  { key: 'dating', title: 'Dating', subtitle: 'Seeing where it goes', icon: '✿', color: '#FF2FB3' },
  { key: 'relationship', title: 'In a Relationship', subtitle: 'Getting to know each other', icon: '♥', color: '#FF3B5C' },
  { key: 'engaged', title: 'Engaged', subtitle: 'Put a ring on it', icon: '♦', color: '#00D6FF' },
  { key: 'married', title: 'Married', subtitle: 'Happily ever after', icon: '♦', color: '#FFB020' },
];

export function StatusScreen({ navigation }: Props) {
  const claimPerson = useSessionStore(state => state.claimPerson);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={() => navigation.goBack()} />
        </View>

        <Text style={styles.title}>Select Status</Text>
        <Text style={styles.subtitle}>Choose your current relationship stage</Text>

        <View style={styles.list}>
          {options.map(option => (
            <Pressable
              key={option.key}
              accessibilityRole="button"
              onPress={() => {
                claimPerson();
                navigation.navigate('ClaimQRCode', { statusTitle: option.title });
              }}
            >
              <GlassCard style={styles.rowCard}>
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { borderColor: option.color }]}>
                    <Text style={[styles.rowIconText, { color: option.color }]}>{option.icon}</Text>
                  </View>
                  <View style={styles.rowText}>
                    <Text style={styles.rowTitle}>{option.title}</Text>
                    <Text style={styles.rowSubtitle}>{option.subtitle}</Text>
                  </View>
                  <Text style={styles.chev}>{'>'}</Text>
                </View>
              </GlassCard>
            </Pressable>
          ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
  },
  header: {
    height: 44,
    justifyContent: 'center',
  },
  title: {
    marginTop: spacing.md,
    color: colors.white,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 6,
    color: colors.whiteMuted,
    fontSize: 12,
    textAlign: 'center',
  },
  list: {
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  rowCard: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  rowIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowIconText: {
    fontSize: 12,
    fontWeight: '900',
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
  },
  rowSubtitle: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 12,
  },
  chev: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 16,
    fontWeight: '900',
  },
});
