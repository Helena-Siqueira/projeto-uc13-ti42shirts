const express = require('express')
const app = express()
app.use(express.json())

const cr_pagamentos = require('./pagamento')
app.use('/pagamento', cr_pagamentos)

const cr_user = require('./routes/user')
app.use('/user', cr_user)

const cr_reviews = require('./routes/reviews')
app.use('/reviews', cr_reviews)


const cr_camisa = require('./routes/camisa')
app.use('/camisa', cr_camisa)


const cr_category = require('./categorias')
app.category('/categorias', cr_category)


app.listen(3000, () => {
    console.log('http://localhost:3000')
})
    