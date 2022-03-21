module.exports = {
	configureWebpack: {
		devServer: {
			open: true,
			proxy: {
				'/api': {
					target: 'http://192.168.100.110:8080/',
					// target: 'http://wangge.yunbown.com/api',
					pathRewrite: {'^/api' : ''},
					changeOrigin: true,     // target是域名的话，需要这个参数，
					secure: false,          // 设置支持https协议的代理
				}
			}
		},
		externals: {
			'AMap': 'AMap',
			'AMapUI': 'AMapUI'
		},
	},
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	outputDir: 'dist',
	assetsDir: 'static',
}