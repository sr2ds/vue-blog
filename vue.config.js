  const path = require("path");
  const shell = require('child_process').execSync;
  var fs = require('fs');

  const EventHooksPlugin = require('event-hooks-webpack-plugin');

  // Build to web
  module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
      'vue-blog' :
      '/',
    configureWebpack: {
      plugins: [
        new EventHooksPlugin({
          done: () => {

            /**
             * Copy Build to Cordova 
             * 
             */
            if (fs.existsSync('dist')) {
              const src = `dist`;
              const dist = `cordova/www`;

              shell(`mkdir -p ${dist}; cp -r ${src}/* ${dist}`);
              shell('sed -ic "s/\\=\\/vue-blog\\//\\=/g" cordova/www/index.html')
            }
          }
        }),
      ]
    },
    outputDir: path.resolve(__dirname, "dist"),
  }