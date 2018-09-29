module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
	watch:true,
  resolve: {
    root: __dirname,
    alias: {
    Sample:'app/components/Sample.js',
    Example: 'app/components/example.js',
    Context: 'app/components/context.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
	devtool:'cheap-module-eval-source-map'
};
