import { Image, StyleSheet, Text, View } from 'react-native';

import { ClaimyLogoMark } from '../../../shared/components/ClaimyLogoMark';
import { spacing } from '../../../shared/theme/spacing';
import { typography } from '../../../shared/theme/typography';

type OnboardingSlideProps = {
  title: string;
  titleEmphasis?: string;
  description: string;
  icon: 'user' | 'shield' | 'logo';
};

const userIcon = require('../../../shared/assets/Icons/fi-rr-user.png');
const shieldIcon = require('../../../shared/assets/Icons/fi-rr-shield.png');

export function OnboardingSlide({ title, titleEmphasis, description, icon }: OnboardingSlideProps) {
  const renderIcon = () => {
    if (icon === 'user') {
      return <Image source={userIcon} style={styles.userIcon} resizeMode="contain" />;
    }
    if (icon === 'shield') {
      return <Image source={shieldIcon} style={styles.shieldIcon} resizeMode="contain" />;
    }
    return <ClaimyLogoMark size={40} color="#FF00A8" />;
  };

  return (
    <View style={styles.center}>
      <View style={styles.iconOuter}>
          {renderIcon()}
      </View>

      <Text style={styles.title}>
        {title}
        {titleEmphasis ? <Text style={styles.titleEm}> {titleEmphasis}</Text> : null}
      </Text>

      <Text style={styles.subtitle}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },
  iconOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(20,20,30,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#353436',
    marginBottom: spacing.md,
  },
  userIcon: {
    marginTop:spacing.md,
    width: 70,
    height: 70,
    tintColor: '#4F79FF',
  },
  shieldIcon: {
    marginTop:spacing.md,
    width: 70,
    height: 70,
    tintColor: '#A947FF',
  },
  title: {
    ...typography.onboarding.heading,
  },
  titleEm: {
    ...typography.onboarding.headingEmphasis,
  },
  subtitle: {
    ...typography.onboarding.description,
    paddingHorizontal: spacing.sm,
  },
});
