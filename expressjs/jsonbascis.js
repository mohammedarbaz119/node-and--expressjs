const express = require('express')
const app = express()
const path = require('path')
const {products} = require('./json.js')
app.get('/',(req,res)=>{
    res.send('<h1>home page</h1> <a href="/json">products</a>')
})
app.get('/json',(req,res)=>{
res.json(products.map(({name})=>name))
})
app.listen(4000,()=>(console.log(400)))