const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

const root = path.resolve(__dirname, '..')

module.exports = {
  resolve: {
    alias: {
      renderer: path.join(root, 'src', 'renderer'),
      static: path.join(root, 'static')
    }
  },
  plugins: [new VuetifyLoaderPlugin()]
}
