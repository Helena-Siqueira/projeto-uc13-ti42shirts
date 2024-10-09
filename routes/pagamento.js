const express = require('express')
const router = express.Router()

const cpagamento = require('../controllers/pagamento')

router.post('/create', cpagamento.create_pagamentos)

router.get( '/read', cpagamento.read_user)

router.get( '/show/:id', cpagamento.show_user)

router.put( '/update/:id', cpagamento.upt_id)

router.delete('/delete/:id', cpagamento.delete_user)

module.exports = router