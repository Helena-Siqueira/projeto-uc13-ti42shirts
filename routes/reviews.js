const express = require('express')
const router = express.Router()

var vreviews = []

const creviews = require('..//controllers/reviews')


router.post("/create", creviews.create_reviews)

router.get('/show/:id', creviews.show_reviews)

read.get('/read/:id', creviews.encontrar_reviews)

router.put('/update/:id', creviews.atualizar_reviews)

router.delete('/delete/:id', creviews.delete_reviwes)

module.exports = router

