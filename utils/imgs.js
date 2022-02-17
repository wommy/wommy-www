const Image = require('@11ty/eleventy-img')

module.exports = async name =>
  Image.generateHTML(
    console.log(
      await Image(
        `https://res.cloudinary.com/wommy/image/upload/${name}`,
        {
          widths: [400, null],
          formats: ['avif','webp'],
          filenameFormat: function(_hash, _src, width, format, _options) {
            return `${name.split('/')[3]}-${width}.${format}`
          },
        },
      ),
      {
        alt: `${name.split('/')[3].split('_')[0]}`,
        loading: 'lazy',
        decoding: 'async',
        // id: 'hamburger',
      },
    )
  )
