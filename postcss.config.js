/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-preset-env', {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-media-queries': {
          preserve: false,
        },
        'nesting-rules': true,
      },
      browsers: 'last 2 versions',
    }),
  ],
};

module.exports = config;
