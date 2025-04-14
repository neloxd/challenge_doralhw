module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        // root: ['./src'],
        // alias: hq.get('babel'),
        alias: {
          // This needs to be mirrored in tsconfig.json
          // '@app': './src/',
          '@app': './src',
          '@assets': './src/assets/*',
          // '@components': './src/components',
          // '@screens': './src/screens',
          // '@navigation': './src/navigation',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.native.js',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
        ],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        envName: 'APP_ENV',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    'react-native-reanimated/plugin',
  ], // Reanimated must be listed last
};
