const express = require('express')
const mysql = require('mysql')

const app = express()

app.get('/', (req,res)=>{

    res.send('ok')

})


app.listen(4000, ()=>{

    console.log('app runnig')

})