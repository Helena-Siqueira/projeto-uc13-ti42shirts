const express = require('express')
const router = express.Router()

const cuser = require('../controllers/categorias')

router.post('/create', cuser.create_category)

router.get ('/show/:id', cuser.show_category)

router.get ('/read', cuser. read_category)

router.put ('/update/:id', cuser.create_category)

router.delete('/delete/:id', cuser.delete_category)

module.exports = router 

