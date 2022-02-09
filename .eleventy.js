module.exports = function (c) {
	c.ignores.add('src/_content')
	c.addPassthroughCopy({ "_static/*": "assets/" })
	return {
		htmlTemplateEngine: 'njk',
		markdownTemplateEngine: 'njk',
		dir: {
			input: 'src',
			layouts: '_layouts',
		}
	}
}
