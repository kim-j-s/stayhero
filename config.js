module.exports = {
	config: {
		tailwindjs: "./tailwind.config.js",
		port: 9060
	},
	paths: {
		root: "./",
		src: {
			base: "./src",
			font: "./src/assets/fonts",
			css: "./src/assets/css",
			// js: "./src/js",
			img: "./src/images",
			includeHtml: './src/html/include_html',
			// guide: './src/guide',
			// guideImg: './src/guide/code/styles',
		},
		dist: {
			base: "./dist",
			font: "./dist/assets/fonts",
			css: "./dist/assets/css",
			// js: "./dist/js",
			img: "./dist/images",
			// guide: './dist/guide',
			// guideImg: './dist/guide/code/styles',
		},
		build: {
			base: "./build",
			css: "./build/assets/css",
			cssFile: "ps_style_pc",
			// js: "./build/js",
			jsLib: "./dist/js/lib",
			jsFile: "ps_script_pc",
			img: "./build/images"
		}
	}
}