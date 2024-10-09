const express = require('express')
const router = express.router()

const ccamisas = require('../controllers/camisa')

router.post('/create',  ccamisas.create_camisa)


router.get( '/show', ccamisas.read_vcamisas )


router.get( '/read/:id', ccamisas.encontrar_id )


router.put( '/update/:id', ccamisas.atualizar_camisa)



router.delete('/delete/:id',  ccamisas.delete_camisa)

module.exports = router

