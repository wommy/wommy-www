const process = require('process')

module.exports = async ()=> await require('@sanity/client')({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2021-09-28',
  token: process.env.SANITY_TOKEN,
}).fetch(`*[_type=='todo'] | order(_createdAt asc).todo`)
