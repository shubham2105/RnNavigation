const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

// Get default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Define your Metro configuration
const config = mergeConfig(defaultConfig, {});

// Apply Reanimated Metro configuration
module.exports = wrapWithReanimatedMetroConfig(config);
