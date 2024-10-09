const express = require('express')
const router = express.Router()

const cuser = require('../controllers/user')

router.post('/create', cuser.create_user)

router.get('/read', cuser.all_users)

/*router.get('/user/:id', (req, res) => {
    
    //let id = req.params.id
    let {id} = req.params;

    for( let i = 0; i < vusers.length; i++ ){
        if(vusers[i].id == id){
            return res.status(200).json({
                message: "Usuário encotrado",
                db: vusers[i]
            })
        }
    }

    return res.status(404).json({
        message: "Usário não encontrado",
        db:[]
    })
})*/

router.get('/show/:id', cuser.id_user)

router.put('/upadte/:id', cuser.update_user)

router.delete('/delete/:id', cuser.delete_user)

module.exports = router