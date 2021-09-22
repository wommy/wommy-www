module.exports = function (c) {
	c.addPlugin(require('@11ty/eleventy-navigation'))
	c.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))
	c.addPassthroughCopy({ "_static": "assets" })
	return { htmlTemplateEngine: 'njk', }
}
