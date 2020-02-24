const router = require('express').Router()
const axios = require('axios')

const logger = require('./../utilities/logger')

const getPostsByUserId = async (req, res) => {
  const name = process.env.ENV_APP_NAME || '?'
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${req.params.user_id}&name=${name}`
  logger.log('calling external resource', url)

  try {
    const response = await axios.get(url)
    res.json(response.data)
  } catch (err) {
    logger.log('ERROR fetching client translation', url)
    res.json({})
  }
}

router.get('/user/:user_id/posts', getPostsByUserId)

module.exports = router
