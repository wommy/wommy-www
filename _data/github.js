const Cache = require('@11ty/eleventy-cache-assets')

module.exports = async function() {
	try {
		let encoded = await Cache('https://api.github.com/repos/wommy/rd/contents/cy4n.md', {
			duration: '1d',
			type: 'json',
		})
		// console.log(encoded.content)

		// i missed the .content below, wasted like 20 mins

		let buff = new Buffer(encoded.content, 'base64')

		// originally thought i needed to decode it,

		// let decoded = buff.toString('ascii')
		// console.log(decoded)
		// return {
		// 	decoded
		// }

		// realized fs uses a buffer
		// https://stackabuse.com/encoding-and-decoding-base64-strings-in-node-js/
		// require('fs').writeFileSync('./rd/cy4n.md', buff)

	} catch (e) {
		console.error(e)
	}
}
