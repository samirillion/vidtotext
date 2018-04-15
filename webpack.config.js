const path = require('path');

module.exports = {
	entry: {
		app: "./src/app",
		popup: "./src/popup"
	},
	output: { filename: "[name].js" },
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