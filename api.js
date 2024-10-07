const express = require('express')
const app = express()
app.use(express.json())

const cr_pagamentos = require('./pagamento')
app.use('/pagamento', cr_pagamentos)

const cr_user = require('./user')
app.use('/user', cr_user)

const cr_reviwes = require('./reviews')
app.use('/reviews', cr_reviwes)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})