const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    // Specify additional asset extensions if needed
    assetExts: ['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp'], // Add any other types if necessary
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'cjs'], // Extend the source extensions if required
    // Ensure not to block the app source folder
    blockList: [
      /node_modules\/.*\/node_modules\/react-native\/.*/, // Exclude nested node_modules
      /.*\/\.git\/.*/, // Exclude .git
      /src\/frontend\/.*\.js/, // Adjust this if you want to include your specific path
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
