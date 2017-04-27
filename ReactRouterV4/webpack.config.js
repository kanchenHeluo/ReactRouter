var webpack = require('webpack');

var config = {
	entry: './Main.jsx',
	output:{
		path:'/',
		filename:'index.js'
	},
	devServer:{
		inline:true,
		port:9898
	},
	devtool: 'source-map',
	module: {		
		rules:[	
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
					presets:['es2015', 'react', 'stage-0']
				}
			}
		]
	},	
	resolve:{
		extensions:['.js','.jsx']
	}
};

module.exports = config;