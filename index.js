const express = require('express')
const port = 3000

const indexRouter = require('./routes/index');

const app = express()



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

