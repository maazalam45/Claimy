import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ChatStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatThread'>;

export function ChatThreadScreen({ navigation, route }: Props) {
  const { name } = route.params;
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.getParent()?.navigate('ChatTab' as never, { screen: 'Chat' } as never);
  };

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={handleBack} />
          <View style={styles.headerText}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.status}>Online now</Text>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.messages} showsVerticalScrollIndicator={false}>
          <GlassCard style={[styles.bubble, styles.leftBubble]}>
            <Text style={styles.leftText}>Hey, saw your update on Claimy.</Text>
          </GlassCard>
          <GlassCard style={[styles.bubble, styles.rightBubble]}>
            <Text style={styles.rightText}>Yeah, finally set it up properly.</Text>
          </GlassCard>
          <GlassCard style={[styles.bubble, styles.leftBubble]}>
            <Text style={styles.leftText}>Looks clean. Want to sync this weekend?</Text>
          </GlassCard>
        </ScrollView>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  headerText: {
    gap: 2,
  },
  name: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '900',
  },
  status: {
    color: colors.whiteMuted,
    fontSize: 12,
  },
  messages: {
    paddingTop: spacing.lg,
    gap: spacing.sm,
  },
  bubble: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    maxWidth: '78%',
  },
  leftBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
  rightBubble: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,47,179,0.16)',
    borderColor: 'rgba(255,47,179,0.24)',
  },
  leftText: {
    color: colors.white,
    fontSize: 13,
  },
  rightText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '700',
  },
});
