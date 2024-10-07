const express = require('express')
const app = express()

app.use(express.json())

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
        db: vreviews.filter(u => u.deleteAt == null)
    })
}
app.post("/reviews", create_reviews)

    
    //let id = req.params.id

     /*   for( let i = 0; i < vreviews.length; i++){
        if( vreviews[i].id == id ){
            return res.status(200).json({
                message: " Avaliações Encontrada",
                db: vreviews[i]
            })
        }
    }
    
    return res.status(200).json({
    message: "Avaliação não encontrado",
    db: []
    } )
} )    */

    function show_reviews (req, res){
        let {id} = req.params;
    
        const idx = vreviews.findIndex(u => u.id == id)
    
        if(idx == -1 || vreviews[idx].deleteAt !=null){
            return res.status(404).json({
                message: "Não encontrado",
                db: null
            })
        }
    
        return res.status(202).json({
            message: "Encontrei",
            db: vreviews[idx]
    })
    
}

app.get('/reviews/:id', show_reviews)



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

app.put( '/reviews/:id', encontrar_reviews)


    function delete_reviwes(req, res){
    let{id} = req.params

    const idx = vreviews.findIndex(u => u.id == id)
    if(idx != -1){
        //vreviwes.slice(idx) - Deletar Definitivamente
        vreviews[idx].deleteAt = new Date
        return res.status(203).jason({
            message: "Reviews excluido"
        })
    }

    return res.status(404).jason({
        message: "Usuario nao encontrado"
    })
}

app.delete('/reviews/:id', delete_reviwes)


app.listen(3000, () => {
    console.log('http://localhost:3000')
})
