module.exports = function (c) {
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
