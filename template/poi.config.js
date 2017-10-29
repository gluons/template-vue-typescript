module.exports = {
	entry: './src/main.ts',
	html: {
		title: '<%= name %>',
		description: '<%= description %>'
	},
	presets: [
		require('poi-preset-typescript')()
	]
};
