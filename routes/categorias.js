const express = require('express')
const router = express.Router()

const cuser = require('../controllers/categorias')

router.post('/create ', create_category)

router.get ('/show/:id', show_category)

router.get ('/read', read_category)

router.put ('/update/:id', update_category)

router.delete('/delete/:id', delete_user)

module.exports = router 

