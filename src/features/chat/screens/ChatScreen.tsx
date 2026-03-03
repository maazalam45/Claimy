import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ChatStackParamList } from '../../../navigation/types';
import { GlassCard } from '../../../shared/components/GlassCard';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ChatStackParamList, 'Chat'>;

export function ChatScreen({ navigation }: Props) {
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.getParent()?.navigate('HomeTab' as never, { screen: 'Home' } as never);
  };

  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.header}>
          <IconCircleButton icon="<" accessibilityLabel="Back" onPress={handleBack} />
          <View style={styles.personPill}>
            <View style={styles.avatar} />
            <Text style={styles.personName}>ADRIAN</Text>
            <View style={styles.dot} />
          </View>
          <View style={styles.headerActions}>
            <IconCircleButton icon="◔" accessibilityLabel="Call" />
            <IconCircleButton icon="▢" accessibilityLabel="Video" />
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Pressable onLongPress={() => navigation.navigate('ChatHideSuggestion')}>
            <GlassCard style={styles.suggestCard}>
              <View style={styles.suggestHead}>
                <Text style={styles.suggestTag}>SUGGESTED</Text>
                <Pressable onPress={() => navigation.navigate('ChatReport')}>
                  <View style={styles.planPill}>
                    <Text style={styles.planText}>Plan</Text>
                  </View>
                </Pressable>
              </View>
              <Text style={styles.suggestTitle}>Date Night</Text>
              <Text style={styles.suggestBody}>
                A cool intimate French restaurant in San Francisco with small plate...
              </Text>
            </GlassCard>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('ChatCardOptions')}>
            <View style={styles.suggestHead}>
              <Text style={styles.promptLabel}>FUTURE PLANS</Text>
              <Text style={styles.promptMuted}>HIDDEN</Text>
            </View>
            <GlassCard style={styles.promptCard}>
              <Text style={styles.question}>
                "If money or time were no object, what's one big adventure you'd love to go on together?"
              </Text>

              <View style={styles.waitRow}>
                <View style={styles.waitAvatar} />
                <Text style={styles.waitText}>Waiting for response...</Text>
              </View>

              <Pressable onPress={() => navigation.navigate('ChatYourAnswer')}>
                <View style={styles.answerRow}>
                  <View style={styles.answerIcon}>
                    <Text style={styles.answerIconText}>◌</Text>
                  </View>
                  <View style={styles.answerButton}>
                    <Text style={styles.answerButtonText}>TAP TO ANSWER</Text>
                  </View>
                </View>
              </Pressable>
            </GlassCard>
          </Pressable>

          <View style={styles.rightMessage}>
            <Text style={styles.rightMessageText}>Hi there</Text>
            <Text style={styles.rightMeta}>10:32 AM</Text>
          </View>

          <View style={styles.leftMessage}>
            <Text style={styles.leftMessageText}>How are you doing?</Text>
            <Text style={styles.leftMeta}>10:40 AM</Text>
          </View>

          <View style={styles.bottomPad} />
        </ScrollView>

        <View style={styles.composer}>
          <Text style={styles.composeIcon}>⌁</Text>
          <Text style={styles.composePlaceholder}>Message</Text>
          <Text style={styles.composeMic}>◔</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  personPill: {
    flex: 1,
    height: 34,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
  },
  avatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  personName: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34C759',
    marginLeft: 'auto',
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  content: {
    paddingTop: spacing.md,
    gap: spacing.md,
  },
  suggestCard: {
    backgroundColor: 'rgba(148,79,255,0.32)',
    borderColor: 'rgba(148,79,255,0.36)',
    padding: spacing.md,
  },
  suggestHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  suggestTag: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  planPill: {
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  planText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  suggestTitle: {
    marginTop: 6,
    color: colors.white,
    fontSize: 28 / 2,
    fontWeight: '900',
  },
  suggestBody: {
    marginTop: 4,
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
    lineHeight: 17,
  },
  promptCard: {
    padding: spacing.md,
    backgroundColor: 'rgba(20,29,50,0.75)',
    borderColor: 'rgba(0,214,255,0.24)',
  },
  promptTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  promptLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
  },
  promptMuted: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 11,
    fontWeight: '700',
  },
  question: {
    color: 'rgba(255,255,255,0.92)',
    fontSize: 31 / 2,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  waitRow: {
    marginTop: spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  waitAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  waitText: {
    color: 'rgba(255,255,255,0.45)',
    fontSize: 12,
  },
  answerRow: {
    marginTop: spacing.sm,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: 'rgba(255,255,255,0.04)',
    padding: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  answerIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  answerIconText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 12,
  },
  answerButton: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(78,94,255,0.46)',
    borderWidth: 1,
    borderColor: 'rgba(78,94,255,0.6)',
    paddingVertical: 10,
  },
  answerButtonText: {
    color: 'rgba(255,255,255,0.86)',
    fontSize: 12,
    fontWeight: '700',
  },
  rightMessage: {
    alignSelf: 'flex-end',
    borderRadius: 12,
    borderBottomRightRadius: 4,
    backgroundColor: 'rgba(87,82,255,0.85)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    maxWidth: '58%',
    gap: 3,
  },
  rightMessageText: {
    color: colors.white,
    fontSize: 30 / 2,
    fontWeight: '600',
  },
  rightMeta: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 10,
  },
  leftMessage: {
    alignSelf: 'flex-start',
    borderRadius: 12,
    borderBottomLeftRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    maxWidth: '62%',
    gap: 3,
  },
  leftMessageText: {
    color: '#111118',
    fontSize: 15,
  },
  leftMeta: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: 10,
    marginTop: 2,
  },
  bottomPad: {
    height: 120,
  },
  composer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: 20,
    height: 50,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.07)',
    backgroundColor: 'rgba(255,255,255,0.03)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    gap: spacing.sm,
  },
  composeIcon: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 18,
  },
  composePlaceholder: {
    flex: 1,
    color: 'rgba(255,255,255,0.45)',
    fontSize: 13,
  },
  composeMic: {
    color: 'rgba(255,255,255,0.55)',
    fontSize: 18,
  },
});
