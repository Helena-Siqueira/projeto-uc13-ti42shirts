var vreviews = []

function create_reviews(req, res){
    let {comentarios, midias, avaliacao, nome, qualidade, email, classificacao, tchuru} = req.body

    var oreviews = {
        "id": vreviews.length+1,
        "comentarios": comentarios,
        "midias": midias, 
        "avaliacao":avaliacao,
        "nome":nome,
        "qualidade":qualidade, 
        "email": email,
        "classificacao":classificacao,
        "tchuru": tchuru,
        "deleteAt": null


    }
    vreviews.push(oreviews)

    return res.status(200).json({
        message: "Avaliação criada",
        db: oreviews
    })
}

function read_reviews (req, res){
    return res.status(200).json({
        message: "Todos usuarios",
        db: vreviews.filter(u => u.deleteAt == null)
    })
}

function encontrar_reviews(req, res) {
    let {id} = req.params;

    const idx = vreviews.findIndex(u => u.id == id)

    if(idx == -1 || vreviews[idx].deleteAt !=null){
    return res.status(404).json({
        message: "Não encontrado",
        db: null
        })
    }

    let {avaliacao, comentario, nome} = req.body

    if(avaliacao) vreviews[idx].avaliacao = avaliacao
    if(comentario) vreviews[idx].comentario = comentario
    if(nome) vreviews[idx].nome = nome


    return res.status(202).json({
        message: "Encontrei",
        db: vreviews[idx]
    })

}

function atualizar_reviews(req, res){
    let {id} = req.params

    const idx = vreviews.findIndex(u => u.id ==id)

    if (idx ==-1 || vreviews[idx].deleteAt != null){
        return res.status(404).json({
            message: "Não encotrado",
            db:[]
        })
    }

    let {avaliação, nome, qualidade} = req.body

    if(avaliação) vreviews[idx].avaliacao = avaliação
    if(nome) vreviews[idx].nome = nome
    if(qualidade) vreviews[idx].qualidade = qualidade

    return res.status(201).json({
        message: "Encontrado",
        db: vreviews[idx]
    })
}

function delete_reviews(req, res){
    let{id} = req.params

    const idx = vreviews.findIndex(u => u.id == id)
    if(idx != -1){

        //vreviwes.slice(idx) - Deletar Definitivamente
        vreviews[idx].deleteAt = new Date()
        return res.status(203).json({
            message: "Reviews excluido"
        })
    }

    return res.status(404).json({
        message: "Usuario nao encontrado"
    })
}

module.exports = {
    create_reviews,
    read_reviews,
    encontrar_reviews,
    atualizar_reviews,
    delete_reviews

}
