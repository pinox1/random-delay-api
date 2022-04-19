const express = require('express')
const internetRouter = express.Router()
const { generator } = require('./utils')
const faker = require('faker')
const { internet } = require('faker')
// baseurl = /api/internet/

// api/internet/avatar
internetRouter.get('/avatar/:count?', (request, response) => {
    const test_avatars_api = generator(request.params.count,
        internet.avatar)
    response.json({
        test_avatars_api
    })
})


// api/internet/avatar
internetRouter.get('/email/:count?', (request, response) => {
    const fucking_emails = generator(request.params.count,
        internet.email)
    response.json({
        fucking_emails: fucking_emails
    })
})


module.exports = {
    internetRouter
}