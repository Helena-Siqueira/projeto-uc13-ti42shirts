const express = require('express')
const router = express.Router()

const creviews = require('../controllers/reviews')

router.post("/create", creviews.create_reviews)

router.get('/read', creviews.read_reviews)

router.get('/show/:id', creviews.encontrar_reviews)

router.put('/update/:id', creviews.atualizar_reviews)

router.delete('/delete/:id', creviews.delete_reviews)

module.exports = router

