const router = require('express').Router()
const axios = require('axios')

const logger = require('./../utilities/logger')

const getUsers = async (req, res) => {
  const url = `https://jsonplaceholder.typicode.com/users`
  logger.log('calling external resource', url)

  try {
    const response = await axios.get(url)
    res.json(response.data)
  } catch (err) {
    logger.log('ERROR fetching client translation', url)
    res.json({})
  }
}

router.get('/users', getUsers)

module.exports = router
