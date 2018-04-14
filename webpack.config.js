const path = require('path');

module.exports = {
	entry: "./main",
	output: { filename: "app.js" },
	module: {
		rules: [
			{
				test: /\.js$/,
	            loader: 'babel-loader',
		        options: {
		             presets: ['es2015']
		        }
		    }
	    ]
	},
	resolve: {
		extensions: [".js"]
	}
}