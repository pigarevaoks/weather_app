var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: ["babel-polyfill", "./source/index.js"],
	plugins: [
		new ExtractTextPlugin("style.css")
	],
	output: {
		path: __dirname + '/public/build/',
		publicPath: "build/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss")
			},
			// {
			// 	test: /\.less$/,
			// 	loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss!less-loader")
			// },
			{
				test: /\.styl$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss!stylus-loader")
			},
			{ test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
			{ test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
			{ test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
			{ test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
			{ test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },

			{ test: /\.jsx$/, loader: "react-hot!babel!eslint-loader", exclude: [/node_modules/, /public/] },
			{ test: /\.js$/, loader: "babel!eslint-loader", exclude: [/node_modules/, /public/] },

			{ test: /\.json$/, loader: "json-loader" },
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	eslint: {
        configFile: '.eslintrc'
    }
}
