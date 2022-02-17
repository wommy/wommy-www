const Image = require('@11ty/eleventy-img')

module.exports = async name =>
  Image.generateHTML(
    await Image(
      `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/${name}.svg`,
      {
        widths: [64, null],
        formats: ['svg'],
        svgShortCircuit: true,
        cacheOptions: {
          duration: '1d',
          directory: '.cache',
          type: 'svg',
        },
				filenameFormat: function(_hash, _src, _width, format, _options) {
					return `${name.replace('/','-')}.${format}`
				},
      },
    ),
    {
      alt: 'hamburger icon',
      loading: 'lazy',
      decoding: 'async',
      id: 'hamburger',
    },
  )
