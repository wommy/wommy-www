module.exports = function (c) {
	c.addPassthroughCopy({ "_static": "assets" })
	c.addPassthroughCopy( "_redirects" )
	return { htmlTemplateEngine: 'njk', }
}
