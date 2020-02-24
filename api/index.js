const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const routes = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routes)

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

module.exports = {
  path: '/api',
  handler: app
}
