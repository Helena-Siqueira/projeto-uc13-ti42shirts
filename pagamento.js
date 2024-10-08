const express = require('express')
const router = express.Router()


var vpagamento = []

function create_pagamentos(req, res){
    let {codigopagamento, formapagamento, numerocartao, parcelas, datavalidade, codigoseguranca, cobranca_nome, cobranca_sobrenome, cobranca_endereco, cobranca_cep, cobranca_telefone} = req.body

    var opagamento = {
        "id": vpagamento.length+1,
        "codigopagamento":codigopagamento,
        "formapagamento":formapagamento,
        "numerocartao":numerocartao,
        "qtdparcelas":parcelas,
        "datavalidade":datavalidade,
        "codigoseguranca":codigoseguranca,
        "cobranca_nome":cobranca_nome,
        "cobranca_sobrenome":cobranca_sobrenome,
        "cobranca_endereco":cobranca_endereco,
        "cobranca_cep":cobranca_cep,
        "cobranca_telefone":cobranca_telefone,
        "deletAt":null
    }
    vpagamento.push(opagamento)
    
    return res.status(201).json({
        message: "Pagamento Efetuado",
        db: opagamento.filter(u => u.deletedAt == null)

    })
}
router.post('/create', create_pagamentos)


function read_user(req, res){
    return res.status(200).json({
        message: "Todos usuarios",
        db: vpagamento
    })
}

router.get( '/read', read_user)


function show_user(req,res) {
    let {id} = req.params

    const idx = vpagamento.findIndex(u => u.id == id)

    if(idx == -1 || vpagamento[idx].deletedAt != null){
        return res.status(404).json({
            message: "Nao encontrado",
            db: []
        })
    }

    return res.status(202).json({
        message: "Encontrei",
        db:vpagamento[idx]
    })   
}

router.get( '/show/:id', show_user)
    

function upt_id(req,res) {

    let {id} = req.params

    const idx = vpagamento.findIndex(u => u.id == id)

    if(idx == -1 || vpagamento[idx].deletedAt != null){
        return res.status(404).json({
            message: "Nao encontrado",

            db: []
        })
    }

    let {formapagamento, numerocartao, parcelas, datavalidade, codigoseguranca, cobranca_nome, cobranca_sobrenome, cobranca_endereco, cobranca_cep, cobranca_telefone} = req.body

    if(formapagamento) vpagamento[idx].formapagamento = formapagamento
    if(numerocartao) vpagamento[idx].numerocartao = numerocartao
    if(parcelas) vpagamento[idx].parcelas = parcelas
    if(datavalidade) vpagamento[idx].datavalidade = datavalidade
    if(codigoseguranca) vpagamento[idx].datavalidade = datavalidade
    if(cobranca_nome) vpagamento[idx].cobranca_nome = cobranca_nome
    if(cobranca_sobrenome) vpagamento[idx].cobranca_sobrenome = cobranca_sobrenome
    if(cobranca_endereco) vpagamento[idx].cobranca_endereco = cobranca_endereco
    if(cobranca_cep) vpagamento[idx].cobranca_cep = cobranca_cep
    if(cobranca_telefone) vpagamento[idx].cobranca_telefone = cobranca_telefone

    return res.status(202).json({
        message: "Encontrei",
        db: vpagamento[idx]
    })
    
}

router.put( '/update/:id', upt_id)


function delete_user(res,res){
    let {id} = req.params

    const idx = vuser.findIndex(u => u.id == id)
    if(idx != -1){
        //vpagamento.slice(idx) = "apagar o cara de verdade"
        vpagamento[idx].deletedAt = new Date ()
        return res.status(203).json({
            message: "Virou camisa de saudade"
        })
    }

    return res.status(404).json({
        message: "Nao encontrado"
    })
}
router.delete('/delete/:id', delete_user)

module.exports = router