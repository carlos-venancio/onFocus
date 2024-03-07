module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    sourceMaps: true,
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
    
  };
};
