const { sending, receiving, check} = require('../controller/data.controller.js')
const route = require('express').Router()

route.get("/", check)
route.post('/send', sending)
route.get('/receive', receiving)

module.exports = route
