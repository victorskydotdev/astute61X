module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets/');
	eleventyConfig.addPassthroughCopy('./src/css/');
	eleventyConfig.addPassthroughCopy('./src/js/');

	// Return your Object options:
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
