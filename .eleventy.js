module.exports = function (c) {
	c.addPassthroughCopy("assets")
	return { htmlTemplateEngine: 'njk', }
}
