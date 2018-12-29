const path = require('path');
const Happypack = require('happypack');
//HappyPack它把任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。
const CopyWebpackPlugin = require('copy-webpack-plugin');
// 在webpack中拷贝文件和文件夹

module.exports = {
	output: {
		//输出文件地址
		filename  : '[name].[hash:8].js',
		path      : path.resolve(__dirname, '../dist'),
		publicPath: '/',
	},
	resolve: {
		//文件路径缩写
		extensions: ['.js', '.jsx'],
		alias     : {
			src       : path.resolve(__dirname, '../src'),
			utils     : path.resolve(__dirname, '../src/utils'),
			stores    : path.resolve(__dirname, '../src/stores'),
			assets    : path.resolve(__dirname, '../src/assets'),
			pages     : path.resolve(__dirname, '../src/pages'),
			components: path.resolve(__dirname, '../src/components'),
		},
	},
	module: {
		rules: [
			// {
			// 	test   : /\.jsx?$/,
			// 	enforce: 'pre',
			// 	loader : 'eslint-loader',
			// 	exclude: /node_modules/,
			// },
			{
				test   : /\.jsx?$/,
				use    : 'happypack/loader?id=js',
				include: path.resolve(__dirname, '../src'),
			},
			{
				test   : /\.svg$/,
				loader : 'svg-sprite-loader',
				include: path.resolve(__dirname, '../src/assets/svg'),
				options: {
					name     : '[name]',
					prefixize: true,
				},
			},
			{
				test   : /\.(png|jpg|gif|svg)$/,
				loader : 'file-loader',
				exclude: path.resolve(__dirname, '../src/assets/svg'),
				options: {
					name: 'static/[name].[ext]?[hash:8]',
				},
			},
		],
	},
	plugins: [
		new Happypack({
			id     : 'js',
			threads: 4,
			loaders: ['babel-loader'],
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, '../static'),
				to  : path.resolve(__dirname, '../dist/static'),
			},
		]),
	],
};
