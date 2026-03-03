export type OnboardingSlideCopy = {
  key: string;
  title: string;
  titleEmphasis?: string;
  description: string;
  icon: 'user' | 'shield' | 'logo';
};

export const onboardingSlides: OnboardingSlideCopy[] = [
  {
    key: 'step-1',
    title: 'True Bonds',
    description:
      'An exclusive space for genuine relationships. One account, one person, verified real.',
    icon: 'user',
  },
  {
    key: 'step-2',
    title: 'Private World for Two',
    description:
      'A sanctuary just for both of you to grow. No distractions, just tools to build a lasting legacy together.',
    icon: 'shield',
  },
  {
    key: 'step-3',
    title: 'Claim Your Special',
    titleEmphasis: 'Someone',
    description:
      'This is the definitive mark of your commitment. Anyone searching for them will instantly see they are claimed by you, making your bond undeniable to the world.',
    icon: 'logo',
  },
];
