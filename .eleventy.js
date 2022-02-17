module.exports = function (c) {
	c.addPassthroughCopy("assets")
	c.addPassthroughCopy("favicon.ico")
	return { htmlTemplateEngine: 'njk', }
}
