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
        '@components': path.resolve(__dirname, 'src/components'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@css': path.resolve(__dirname, 'src/css'),
        '@hooks': path.resolve(__dirname, 'src/hooks/'),
        '@constants': path.resolve(__dirname, 'src/constants/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@theme': path.resolve(__dirname, 'src/theme/'),
        '@types': path.resolve(__dirname, 'src/types/'),
        '@widgets': path.resolve(__dirname, 'src/widgets/'),
        '@legacy': path.resolve(__dirname, 'src/modules/legacy/')
      }
    }
  });
};
