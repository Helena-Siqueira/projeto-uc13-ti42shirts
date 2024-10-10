const express = require('express')
const router = express.Router()

const ccamisas = require('../controllers/camisa')

router.post('/create',  ccamisas.create_camisa)


router.get( '/read', ccamisas.read_vcamisas )


router.get( '/show/:id', ccamisas.show_id )


router.put( '/update/:id', ccamisas.atualizar_camisa)



router.delete('/delete/:id',  ccamisas.delete_camisa)

module.exports = router

