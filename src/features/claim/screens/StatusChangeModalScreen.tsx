import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ClaimStackParamList } from '../../../navigation/types';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ClaimStackParamList, 'StatusChangeModal'>;

const rows = [
  ['Talking Stage', 'Getting to know each other', '#B15CFF', '◌'],
  ['Dating', 'Seeing where it goes', '#FF2FB3', '✿'],
  ['In a Relationship', 'Committed bond', '#FF3B5C', '♥'],
  ['Engaged', 'Put a ring on it', '#00D6FF', '♦'],
];

export function StatusChangeModalScreen({ navigation }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.sheet}>
        <View style={styles.grabber} />
        <Text style={styles.title}>Update Relationship Status</Text>
        <View style={styles.list}>
          {rows.map(([title, sub, color, icon]) => (
            <Pressable key={title} style={styles.row} onPress={() => navigation.goBack()}>
              <View style={[styles.iconWrap, { borderColor: color as string }]}>
                <Text style={[styles.icon, { color: color as string }]}>{icon}</Text>
              </View>
              <View style={styles.txt}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowSub}>{sub}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.64)', justifyContent: 'flex-end' },
  sheet: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: '#1A1B22',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: spacing.lg,
    paddingBottom: 26,
  },
  grabber: { alignSelf: 'center', width: 36, height: 4, borderRadius: 2, backgroundColor: 'rgba(255,255,255,0.3)' },
  title: { marginTop: spacing.md, color: colors.white, fontSize: 32 / 2, fontWeight: '900' },
  list: { marginTop: spacing.md, gap: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  iconWrap: { width: 34, height: 34, borderRadius: 17, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  icon: { fontSize: 13, fontWeight: '900' },
  txt: { gap: 2 },
  rowTitle: { color: colors.white, fontSize: 15, fontWeight: '800' },
  rowSub: { color: 'rgba(255,255,255,0.45)', fontSize: 12 },
});
