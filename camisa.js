const express = require('express')
const router = express.router()

var vcamisas = []



function create_camisa(req, res){
    let {tamanho, material,cor } = req.body

    var ocamisa = {
        "id": vcamisas.length,
        "tamanho": tamanho,
        "material": material,
        "cor": cor,
        "deletedAt": null
    }
    vcamisas.push(ocamisa)
    
    return res.status(201).json({
        message: "Camisa Criada",
        db: vcamisas.filter(u => u.deletedAt == null)
    })

}

router.post('/create', create_camisa)

function read_vcamisas(req, res) {
        return res.status(200).json({
        message: "Camisas ",
        db: vcamisas
        
    })
}
router.get( '/show',read_vcamisas )

function encontrar_id(req, res){
    let {id} = req.params

    const idx = vcamisas.findIndex(u => u.id == id)

    
    
    if (idx === -1 || vcamisas[idx].findIndex != null){
        return res.status(404).json({
            message: "Não encontrado",
            db: []
        })
    }

    return res.status(204).json({
        message: "Encontrado",
        db: vcamisas[idx]
    })
}
router.get( '/read/:id',encontrar_id )

function atualizar_camisa(req, res){
    let {id} = req.params

    const idx = vcamisas.findIndex(u => u.id == id)

    if (idx == -1 || vcamisas.findIndex != null){

        return res.status(404).json({
            message: "Não encontrado",
            db: []
        })
    }

    
    let {tamanho, material,cor } = req.body

    if(tamanho) vcamisas[idx].tamanho = tamanho
    if(material) vcamisas[idx].material = material
    if(cor) vcamisas[idx].cor = cor

    
    return res.status(201).json({
        message: "Encontrado",
        db: vcamisas[idx]
    })
}
router.put( '/update/:id',atualizar_camisa)

function delete_camisa(req, res){
    let {id} = req.params

 const express = require('express')
    const app = express()
    router.use( express.json() )
    
    router.listen(3000, () => {
        console.log("http://localhost:3000")
    }) 
    
    idx = vcamisas.findIndex(u => u.id == id)
    
    if(idx != -1){
        //vcamisas.slice(idx)
        vcamisas[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Camisa apagada"
        })
    } 
    
    return res.status(203).json({
        message: "Camisa não apagada"
    })
}

router.delete('/delete/:id', delete_camisa)

module.exports = router

