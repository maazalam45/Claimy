import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { ChatStackParamList } from '../../../navigation/types';
import { AppButton } from '../../../shared/components/AppButton';
import { IconCircleButton } from '../../../shared/components/IconCircleButton';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatNull'>;

export function ChatNullScreen({ navigation }: Props) {
  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.getParent()?.navigate('HomeTab' as never, { screen: 'Home' } as never);
  };

  const handleClaim = () => {
    navigation.getParent()?.navigate('ClaimTab' as never, { screen: 'Status' } as never);
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

        <View style={styles.center}>
          <View style={styles.lockWrap}>
            <Text style={styles.lock}>⌂</Text>
            <View style={styles.heartWrap}>
              <Text style={styles.heart}>♥</Text>
            </View>
          </View>
          <Text style={styles.title}>Special Someone Unclaimed</Text>
          <Text style={styles.subtitle}>
            Claim your special person to start a private 1:1 journey of growth.
            Unlock deep connection tools, shared goals, and a sanctuary built just for the two of you.
          </Text>
          <View style={styles.claimButtonWrap}>
            <AppButton
              label="Claim My Person  >"
              variant="light"
              onPress={handleClaim}
            />
          </View>
        </View>

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
  center: {
    marginTop: '42%',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
  },
  lockWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  lock: {
    color: colors.white,
    fontSize: 30,
    opacity: 0.9,
  },
  heartWrap: {
    position: 'absolute',
    right: -2,
    bottom: -2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    color: colors.primaryAlt,
    fontSize: 15,
    fontWeight: '900',
  },
  title: {
    color: colors.white,
    fontSize: 35 / 2,
    fontWeight: '900',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: spacing.sm,
    color: 'rgba(255,255,255,0.6)',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
  },
  claimButtonWrap: {
    marginTop: spacing.lg,
    alignSelf: 'stretch',
    paddingHorizontal: 22,
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
