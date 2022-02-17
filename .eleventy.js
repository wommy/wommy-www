module.exports = function (c) {
	c.addPassthroughCopy({ "_static": "assets" })
	return { htmlTemplateEngine: 'njk', dir: { input: 'src' }}
}
