const express = require('express')
const app = express()
app.use(express.json())

const cr_pagamentos = require('./routes/pagamento')
app.use('/pagamento', cr_pagamentos)

const cr_user = require('./routes/user')
app.use('/user', cr_user)

const cr_reviwes = require('./routes/reviews')
app.use('/reviews', cr_reviwes)

const cr_camisa = require('./routes/camisa')
app.use('/camisa', cr_camisa)

const cr_category = require('./routes/categorias')
app.use('/categorias', cr_category)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})