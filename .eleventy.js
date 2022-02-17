;[
  'solid/bars',
  'solid/envelope',
  'brands/facebook',
  'brands/twitter',
  'brands/google-plus',
  'brands/instagram',
].map(ea => require('./utils/svgs')(ea))
;[
  'v1645059976/wommy/image/wommyBig_x3savv.jpg',
  'v1645061993/wommy/image/terence-mckenna_poskoa.png',
].map(ea => require('./utils/imgs')(ea))

module.exports = function (c) {
	c.addPassthroughCopy('assets')
	c.addPassthroughCopy('img')
  return { htmlTemplateEngine: 'njk' }
}
