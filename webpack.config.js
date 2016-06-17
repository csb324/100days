var path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'src/js/app.js'),
	},
	output: {
		path: path.resolve(__dirname, "dist/js"),
		publicPath: "/assets/",
		filename: "[name].js"
	},
	resolve: {
    extensions : ['', '.js']
  },
	module: {
		loaders: [
			{
				test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
	      query: {
	        presets: ['es2015']
	      }
	    },
			{
				test: /\.scss$/,
				loader: "style/useable!css!sass"
			},
			{
				test: /\.html$/,
        loader: "html?interpolate&attrs=false"
			},
		]
	},
}
