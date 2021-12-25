var path = require('path');

exports.onCreateWebpackConfig = function (props) {
  if (props.stage === 'build-javascript') {
    props.actions.setWebpackConfig({
      devtool: false
    });
  }
  props.actions.setWebpackConfig({
    resolve: {
      alias: {
        '@exoTheme/components': path.resolve(__dirname, 'src/components'),
        '@exoTheme/assets': path.resolve(__dirname, 'src/assets'),
        '@exoTheme/images': path.resolve(__dirname, 'src/images'),
        '@exoTheme/css': path.resolve(__dirname, 'src/css'),
        '@exoTheme/hooks': path.resolve(__dirname, 'src/hooks/'),
        '@exoTheme/constants': path.resolve(__dirname, 'src/constants/'),
        '@exoTheme/utils': path.resolve(__dirname, 'src/utils/'),
        '@exoTheme/theme': path.resolve(__dirname, 'src/theme/'),
        '@exoTheme/customTypes': path.resolve(__dirname, 'src/customTypes/'),
        '@exoTheme/widgets': path.resolve(__dirname, 'src/widgets/'),
        '@exoTheme/legacy': path.resolve(__dirname, 'src/modules/legacy/')
      }
    }
  });
};
