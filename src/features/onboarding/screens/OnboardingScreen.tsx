import { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  Pressable,
  Platform,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewToken,
} from 'react-native';

import { AppButton } from '../../../shared/components/AppButton';
import { ForwardIcon } from '../../../shared/components/AppIcons';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { useSessionStore } from '../../../state/sessionStore';
import { OnboardingSlide } from '../components/OnboardingSlide';
import { onboardingSlides, OnboardingSlideCopy } from '../slides';

function PagerDots({
  activeIndex,
  count,
  onDotPress,
}: {
  activeIndex: number;
  count: number;
  onDotPress: (index: number) => void;
}) {
  return (
    <View style={styles.pager}>
      {Array.from({ length: count }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityLabel={`Go to slide ${index + 1}`}
            onPress={() => onDotPress(index)}
            hitSlop={10}
          >
            <View style={[styles.dot, isActive && styles.dotActive]} />
          </Pressable>
        );
      })}
    </View>
  );
}

export function OnboardingScreen() {
  const completeOnboarding = useSessionStore(state => state.completeOnboarding);
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList<OnboardingSlideCopy>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      const first = viewableItems[0];
      if (first?.index != null) setActiveIndex(first.index);
    },
  ).current;

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 60 }).current;

  const goNext = useCallback(() => {
    const nextIndex = Math.min(activeIndex + 1, onboardingSlides.length - 1);
    listRef.current?.scrollToIndex({ index: nextIndex, animated: true });
  }, [activeIndex]);

  const goTo = useCallback((index: number) => {
    listRef.current?.scrollToIndex({ index, animated: true });
  }, []);

  const skip = useCallback(() => {
    completeOnboarding();
  }, [completeOnboarding]);

  const isLast = activeIndex === onboardingSlides.length - 1;

  return (
    <Screen padded={false}>
      <View style={styles.root}>
        {!isLast ? (
          <View style={styles.skipRow}>
            <Pressable accessibilityRole="button" onPress={skip} hitSlop={10}>
              <Text style={styles.skipText}>Skip</Text>
            </Pressable>
          </View>
        ) : null}

        <FlatList
          ref={listRef}
          data={onboardingSlides}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width }]}>
              <OnboardingSlide
                title={item.title}
                titleEmphasis={item.titleEmphasis}
                description={item.description}
                icon={item.icon}
              />
            </View>
          )}
          getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
          onScrollToIndexFailed={({ index }) => {
            requestAnimationFrame(() => listRef.current?.scrollToIndex({ index, animated: true }));
          }}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          decelerationRate="fast"
        />

        <View style={styles.footer}>
          <PagerDots
            activeIndex={activeIndex}
            count={onboardingSlides.length}
            onDotPress={goTo}
          />
          <View style={styles.buttonWrap}>
            <AppButton
              label={isLast ? 'Get Started' : 'Next'}
              rightIcon={<ForwardIcon />}
              onPress={isLast ? completeOnboarding : goNext}
              fullWidth
              variant="light"
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
  skipRow: {
    position: 'absolute',
    top: Platform.select({ ios: 18, android: 14, default: 14 }),
    right: spacing.xl,
    zIndex: 2,
  },
  skipText: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  slide: {
    paddingHorizontal: spacing.xl,
  },
  footer: {
    paddingBottom: Platform.select({ ios: 34, android: 24, default: 24 }),
    paddingHorizontal: spacing.xl,
    gap: spacing.lg,
  },
  pager: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  dotActive: {
    width: 34,
    height: 7,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.85)',
  },
  buttonWrap: {
    paddingHorizontal: spacing.sm,
  },
});
