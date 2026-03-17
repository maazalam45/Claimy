import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, LinearGradient, RadialGradient, Rect, Stop } from 'react-native-svg';

import { ClaimStackParamList } from '../../../navigation/types';
import {
  BackIcon,
  ForwardIcon,
  StatusChatPurpleIcon,
  StatusDaisyIcon,
  StatusDiamondCyanIcon,
  StatusDiamondGoldIcon,
  StatusHeartIcon,
} from '../../../shared/components/AppIcons';
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
  icon: ReactNode;
  color: string;
};

const options: StatusOption[] = [
  {
    key: 'talking',
    title: 'Talking Stage',
    subtitle: 'Getting to know each other',
    icon: <StatusChatPurpleIcon size={20} color="#B15CFF" />,
    color: '#4A4A4A',
  },
  {
    key: 'dating',
    title: 'Dating',
    subtitle: 'Seeing where it goes',
    icon: <StatusDaisyIcon size={20} color="#FF2FB3" />,
    color: '#4A4A4A',
  },
  {
    key: 'relationship',
    title: 'In a Relationship',
    subtitle: 'Getting to know each other',
    icon: <StatusHeartIcon size={20} color="#FF3B5C" />,
    color: '#4A4A4A',
  },
  {
    key: 'engaged',
    title: 'Engaged',
    subtitle: 'Put a ring on it',
    icon: <StatusDiamondCyanIcon size={20} color="#00D6FF" />,
    color: '#4A4A4A',
  },
  {
    key: 'married',
    title: 'Married',
    subtitle: 'Happily ever after',
    icon: <StatusDiamondGoldIcon size={20} color="#FFB020" />,
    color: '#4A4A4A',
  },
];

export function StatusScreen({ navigation }: Props) {
  const claimPerson = useSessionStore(state => state.claimPerson);

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <Pressable accessibilityRole="button" accessibilityLabel="Back" onPress={() => navigation.goBack()} style={styles.iconCircle}>
            <BackIcon size={20} color="#A3A1A5" />
          </Pressable>
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
              <View style={styles.rowCard}>
                <StatusRowBackground id={option.key} />
                <View style={styles.row}>
                  <View style={[styles.rowIcon, { borderColor: option.color }]}>
                    {option.icon}
                  </View>
                  <View style={styles.rowText}>
                    <Text style={styles.rowTitle}>{option.title}</Text>
                    <Text style={styles.rowSubtitle}>{option.subtitle}</Text>
                  </View>
                  <ForwardIcon size={14} color="rgba(255,255,255,0.42)" />
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </Screen>
  );
}

function StatusRowBackground({ id }: { id: string }) {
  const fillId = `statusFill${id}`;
  const borderId = `statusBorder${id}`;

  return (
    <Svg
      pointerEvents="none"
      style={StyleSheet.absoluteFillObject}
      viewBox="0 0 345 72"
      preserveAspectRatio="none"
    >
      <Defs>
        <LinearGradient id={fillId} x1="0%" y1="50%" x2="100%" y2="50%">
          <Stop offset="0%" stopColor="#1B1B1D" />
          <Stop offset="100%" stopColor="#000000" />
        </LinearGradient>
        <RadialGradient id={borderId} cx="50%" cy="50%" rx="50%" ry="50%">
          <Stop offset="0%" stopColor="#272729" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </RadialGradient>
      </Defs>
      <Rect
        x="0.5"
        y="0.5"
        width="344"
        height="71"
        rx="16"
        ry="16"
        fill={`url(#${fillId})`}
        stroke={`url(#${borderId})`}
        strokeWidth="1"
      />
    </Svg>
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
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#353436',
    backgroundColor: '#262628',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
    position: 'relative',
    minHeight: 72,
    borderRadius: 16,
    padding: 16,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  rowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#353436',
    backgroundColor: '#262628',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
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
});
