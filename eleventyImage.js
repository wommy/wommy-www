const Image = require('@11ty/eleventy-img')

;(async () => {
  const url = 'public/images/wommyBig.jpg'

  const stats = await Image(url, {
    formats: ['jpeg', 'webp'],
    widths: [null, 300, 600],
    dryRun: true,
  })
  console.log(stats)
})()
