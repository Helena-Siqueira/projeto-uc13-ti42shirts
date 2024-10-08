const express = require('express')
const router = express.Router()

var vcategories =[]

function create_category(req, res) {
    let (title,discription,image)= req.body

    var ocategory={
        "id":vcategories.length+1,
        "title":title,
        "discription":discription,
        "image":image,
        "deletedAt":null
    }
    vcategories.push(ocategory)

    return res.status(201).json({
        message: "Categoria Criada" ,
        db: vcategories.filter(u => u.deletedAt == null)
    })
}
router.post('/create ', create_category)

function read_category(req, res) {
    return res.status(201).json({
        message: "Categoria Criada" ,
        db: vcategories
    })
}
router.get ('/read', read_category)
    
function show_category(req, res){
    //let id = req.params.id
    let {id} = req.params;

    const idx = vcategories.findIndex(u => u.id == id)


    if(idx == -1 || vcategories[idx].deletedAt != null){
        return res.status(404).json({
            message: "Toda a categoria encontrada" ,
            db: null

        })
    }
    
        
    return res.status(201).json({
        message: "Categoria não encontrada" ,
        db: vcategories[idx]
    })

}

router.get ('/show/:id', show_category)

function update_category(req, res) {

    //let id = req.params.id
    let {id} = req.params;

    const idx = vcategories.findIndex(u => u.id == id)

    if(idx == -1 || vcategories[idx].deletedAt != null){
        return res.status(404).json({
            message: "Toda a categoria encontrada" ,
            db: null

        })
    }

    
    let {title, discription, image} = req.body

    if(title) vcategories[idx].title = title
    if(discription) vcategories[idx].discription = discription
    if(image) vcategories[idx].imagem = image
        
    return res.status(201).json({
        message: "Categoria não encontrada" ,
        db: vcategories[idx]
    })

}
router.put ('/update/:id', update_category)

function delete_user (req, res){
    let {id} = req;params

    const idx = vcategories.findIndex (u => u.id == id)
    if(idx != -1){
        vcategories[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de Boa"
        })
    }

    return res.status(403).json({
        message: "Não Encontrado"
    })
}
router.delete('/delete/:id', delete_user)

module.exports = router 

