var path = require("path");

module.exports = {
	entry: "./app/main.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	//表示需要加载的所有外置模块
	module: {
		//规则数组
		rules: [
			//下面的规则，表述的是：所有在app文件夹中，且不再node_modules文件夹中的js结尾的文件，都需要用babel-loader来“过”一下。
			{
				test: /\.js$/,
				//包含哪个文件夹
				include: [
					path.resolve(__dirname, "app")
				],
				//不包含哪个文件夹
				exclude: [
					path.resolve(__dirname, "node_modules")
				],
				//加载器
				loader: "babel-loader",
				options: {
					presets: ["es2015", "react"]
				}
			}
		]
	},
	watch: true
}