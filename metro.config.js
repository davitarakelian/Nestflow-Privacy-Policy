const { getDefaultConfig } = require('expo/metro-config');
const { exclusionList } = require('metro-config');

const config = getDefaultConfig(__dirname);

// Support all platforms
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Only block stripe package for web builds
if (process.env.EXPO_PLATFORM === 'web') {
  config.resolver.blockList = exclusionList([/.*node_modules\/@stripe\/stripe-react-native.*/]);
}

module.exports = config;
