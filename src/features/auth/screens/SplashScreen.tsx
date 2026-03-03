import { StyleSheet, Text, View } from 'react-native';

import { ClaimyLogoMark } from '../../../shared/components/ClaimyLogoMark';
import { Screen } from '../../../shared/components/Screen';
import { colors } from '../../../shared/theme/colors';
import { spacing } from '../../../shared/theme/spacing';
import { typography } from '../../../shared/theme/typography';

export function SplashScreen() {
  return (
    <Screen padded={false} backgroundColor={colors.black}>
      <View style={styles.root}>
        <View style={styles.logoOuter}>
          {/* <View style={styles.logoInner}> */}
            <ClaimyLogoMark size={44} />
          {/* </View> */}
        </View>
        <Text style={styles.brand}>CLAIMY</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.lg,
  },
  logoOuter: {
    width: 90,
    height: 90,
    borderRadius: 24,
    backgroundColor: 'rgba(24, 21, 31, 1)',
    borderWidth: 1,
    borderColor: 'rgba(53, 52, 54, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    ...typography.branding.appName,
  },
});
