const commonConfig = require('./common');

const config = {
  ...commonConfig,
  schemaFile: 'http://127.0.0.1:6002/swagger/v1/swagger.json',
  outputFiles: {
    '../src/redux/endpoints/content_menu.ts': {
      exportName: 'content_menu',
      filterEndpoints: [/Menu/i]
    },
  },
};

module.exports = config;
