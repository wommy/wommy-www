// const { EleventyRenderPlugin } = require('@11ty/eleventy')
const Image = require('@11ty/eleventy-img')

;(async () => {
  let stats = await Image('public/images/wommyBig.jpg', {
    formats: ['avif', 'webp', 'jpeg'],
    widths: [600, 1200, 1800],
  })
  console.log(
    stats,
    // Image.generateHTML(stats, {
    //   alt: 'the wommy',
    //   sizes: '100vw',
    //   loading: 'lazy',
    //   decoding: 'async',
    // }),
  )
})()

module.exports = function (c) {
  // c.addPlugin(EleventyRenderPlugin)
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
