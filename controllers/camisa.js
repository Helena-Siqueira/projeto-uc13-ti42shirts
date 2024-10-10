var vcamisas = []

function create_camisa(req, res){
    let {material, cor, tamanho} = req.body

    var ocamisas = {
        "id": vcamisas.length+1,
        "material": material,
        "cor": cor,
        "tamanho" : tamanho,
        "deleteAt" : null


    }
    vcamisas.push(ocamisas)

    return res.status(200).json({
        message: "Camisa criada",
        db : ocamisas
    })
}


function read_vcamisas(req, res) {
    return res.status(200).json({
        message: "Camisas ",
        db: vcamisas.filter(u => u.deleteAt == null)
    })
}

function show_id(req, res){
    let {id} = req.params

    const idx = vcamisas.findIndex(u => u.id == id)

    
    if (idx == -1 || vcamisas[idx].findIndex != null){
        return res.status(404).json({
            message: "Não encontrado",
            db: []
        })
    }

    return res.status(202).json({
        message: "Encontrado",
        db: vcamisas[idx]
    })
}

function atualizar_camisa(req, res){
    let {id} = req.params

    const idx = vcamisas.findIndex(u => u.id == id)

    if (idx == -1 || vcamisas[idx].deleteAt != null){

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

function delete_camisa(req, res){
    let {id} = req.params

    const idx = vcamisas.findIndex(u => u.id == id)
    if (idx == -1 || vcamisas[idx].deleteAt != null){

        return res.status(404).json({
            message: "Não encontrado",
            db: []
        })
    }

    vcamisas[idx].deletedAt = new Date () 
            
    return res.status(203).json({
        message: "Apagado"
    })
}

module.exports = {
    create_camisa, 
    read_vcamisas, 
    show_id, 
    atualizar_camisa, 
    delete_camisa
}