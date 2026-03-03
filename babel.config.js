module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    // Keep reanimated plugin last if you use it.
    'react-native-reanimated/plugin',
  ],
};
