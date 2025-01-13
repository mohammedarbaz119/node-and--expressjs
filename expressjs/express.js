const {readFileSync} = require('fs')
const express = require('express')
const path = require('path')
const exp = require('constants')

const app = express()
app.use(express.static(path.resolve(__dirname,'public')))
// app.get('/',(req,res)=>{
//     res.status(200).sendfile('./expressjs/public/wc1.html')
// })
app.use(express.json())
const products = [
    {name:"laptop",price:200.0},
    {name:"phone",price:100.0},
    {name:"tv",price:150.0}
]

// feature to add products to a shop
app.get("/",(req,res)=>{
    const {name,price} =req.body
    if(!name||!price){
        return res.status(400).json({"message":"please provide a name/price or both"})
    }
    products.push({name,price})
    return res.status(201).json({"message":"product added"})

})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>not found</h1>')
})

app.listen(2030,()=>{
    console.log("ujje")
})
// let patha = path.resolve(__dirname,'public')
// console.log(patha)