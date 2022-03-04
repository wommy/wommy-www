/** https://github.com/11ty/eleventy/discussions/2089
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 * @returns {ReturnType<import('@11ty/eleventy/src/defaultConfig')>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig
    .addPassthroughCopy({
      'public/favicon.ico': './favicon.ico',
      'public/img': './_img',
    })
  return {
    htmlTemplateEngine: 'njk',
    dir: { input: 'src' },
  }
}
