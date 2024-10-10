const {HerinaUpdateType} = require('@herina-rn/core');

/**
 * @type {import('@herina-rn/core').HerinaConfig}
 */
module.exports = {
  environment: 'production',
  baseUrl: 'https://hector.im',
  root: '/Users/fuguiyong/Yxt/demos-openSource/herina/example',
  entryFile: '/Users/fuguiyong/Yxt/demos-openSource/herina/example/index.js',
  outputPath: '/Users/fuguiyong/Yxt/demos-openSource/herina/example/dist',
  minify: false,
  platform: 'android',
  manifestPath: '/Users/fuguiyong/Yxt/demos-openSource/herina/example/manifest.json',
  updateType: HerinaUpdateType.FULL,
};
