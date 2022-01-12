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
        '@exo/components': path.resolve(__dirname, 'src/components'),
        '@exo/assets': path.resolve(__dirname, 'src/assets'),
        '@exo/icons': path.resolve(__dirname, 'src/icons'),
        '@exo/helpers': path.resolve(__dirname, 'src/helpers'),
        '@exo/helpers': path.resolve(__dirname, 'src/helpers'),
        '@exo/images': path.resolve(__dirname, 'src/images'),
        '@exo/css': path.resolve(__dirname, 'src/css'),
        '@exo/hooks': path.resolve(__dirname, 'src/hooks/'),
        '@exo/constants': path.resolve(__dirname, 'src/constants/'),
        '@exo/utils': path.resolve(__dirname, 'src/utils/'),
        '@exo/theme': path.resolve(__dirname, 'src/theme/'),
        '@exo/types': path.resolve(__dirname, 'src/types/'),
        '@exo/utils': path.resolve(__dirname, 'src/utils/'),
        '@exo/widgets': path.resolve(__dirname, 'src/widgets/'),
        '@exo/legacy': path.resolve(__dirname, 'src/modules/legacy/')
      }
    }
  });
};
