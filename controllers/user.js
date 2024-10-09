var vusers = []

function create_user(req, res) {
    let {nome_completo, data_de_nascimento, sexo, email, senha, cpf, numero_de_celular, cep} = req.body
    
    var ouser = {
        "id": vusers.length,
        "nome_completo": nome_completo,
        "data_de_nascimento": data_de_nascimento,
        "sexo": sexo,
        "email": email,
        "senha": senha,
        "cpf": cpf,
        "numero_de_celular": numero_de_celular,
        "cep": cep,
        "deleteAt": null

    }
    vusers.push(ouser)

    
    return res.status(201).json({
        message: "Usuário Criado",
        db: ouser
    })  
}

function all_users(req, res){
    return res.status(200).json({
        message: "Todos os usuários",
        db: vusers.filter(u => u.deleteAt == null)
    })
}

function id_user(req, res)  {
    
    //let id = req.params.id
    let {id} = req.params;

    const idx = vusers.findIndex(u => u.id == id)

    if(idx == -1 || vusers.deleteAt != null){
    return res.status(404).json({
        message: "Usário não encontrado",
        db: null
    })}

    return res.status(202).json({
        message: "Encontrei",
        db: vusers[idx]
    })    
}

function update_user(req, res)  {
    
    //let id = req.params.id
    let {id} = req.params;

    const idx = vusers.findIndex(u => u.id == id)

    if(idx == -1 || vusers[idx].deleteAt != null){
    return res.status(404).json({
        message: "Usário não encontrado",
        db: null
    })}

    let {nome_completo, data_de_nascimento, sexo, email, senha, cpf, numero_de_celular, cep} = req.body
    
    if(nome_completo) vusers[idx].nome_completo = nome_completo
    if(sexo) vusers[idx].sexo = sexo
    if(email) vusers[idx].email = email
    if(senha) vusers[idx].senha = senha
    if(numero_de_celular) vusers[idx].numero_de_celular = numero_de_celular
    if(cep) vusers[idx].cep = cep
    if(data_de_nascimento) vusers[idx].data_de_nascimento = data_de_nascimento
    if(cpf) vusers[idx].cpf = cpf

    return res.status(202).json({
        message: "Encontrei",
        db: vusers[idx]
    })
}

function delete_user(req, res){
    let {id} = req.params
    
    const idx = vusers.findIndex(u => u.id == id)
    if(idx != -1){
        vusers[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de Base"
        })
        
    }

    return res.status(203).json({
        message: "Foi de Base"
    })

}

module.exports = {
    create_user,
    all_users,
    id_user,
    update_user,
    delete_user
}