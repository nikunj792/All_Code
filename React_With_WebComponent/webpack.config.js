module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
	watch:true,
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx'],
    alias:{
      Table : 'app/component/table.js',
      WebComponent: 'app/component/web.js',
      List :'app/component/list.js'
    }
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
