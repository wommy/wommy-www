module.exports = function (c) {
	c.addPassthroughCopy({ "_static": "assets" })
	return {
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'src',
		}
	}
}
