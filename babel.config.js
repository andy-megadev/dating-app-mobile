module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-syntax-import-assertions',
      [
        'module-resolver',
        {
          alias: {
            src: './src'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
};
