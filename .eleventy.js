const { EleventyRenderPlugin } = require('@11ty/eleventy')
module.exports = function (c) {
	c.addPlugin(EleventyRenderPlugin)
	c.addPassthroughCopy('public')
	return {
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'src',
			layouts: '_layouts',
		},
	}
}
