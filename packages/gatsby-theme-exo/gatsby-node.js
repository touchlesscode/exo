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
        '@exo/assets': path.resolve(__dirname, 'src/assets'),
        '@exo/components': path.resolve(__dirname, 'src/components'),
        '@exo/constants': path.resolve(__dirname, 'src/constants'),
        '@exo/context': path.resolve(__dirname, 'src/context'),
        '@exo/css': path.resolve(__dirname, 'src/css'),
        '@exo/icons': path.resolve(__dirname, 'src/icons'),
        '@exo/images': path.resolve(__dirname, 'src/images'),
        '@exo/helpers': path.resolve(__dirname, 'src/helpers'),
        '@exo/hooks': path.resolve(__dirname, 'src/hooks'),
        '@exo/styles': path.resolve(__dirname, 'src/styles'),
        '@exo/theme': path.resolve(__dirname, 'src/theme'),
        '@exo/types': path.resolve(__dirname, 'src/types'),
        '@exo/utils': path.resolve(__dirname, 'src/utils'),
        '@exo/widgets': path.resolve(__dirname, 'src/widgets')
        
      }
    }
  });
};
