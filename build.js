
const {buildUpdate} = require('@herina-rn/core')
const herinaConfig = require('./herina.config')

const start = async (config) => {
  await buildUpdate(config);
};

start(herinaConfig);
