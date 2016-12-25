let join = require('path').join;

const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'kwik-e-serve'
  },
  devtool: 'source-map'
}
