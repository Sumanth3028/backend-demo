let products=[]

const { json } = require('body-parser');
const fs=require('fs')

const path=require('path')


module.exports=class Product{
    constructor(t){
        this.title=t;
    }

    save(){
        const p=path.join(path.dirname(process.memoryUsage().toString()),'data','products.json')
        fs.readFile(p,(err,fileContent)=>{
            let products=[]
            if(!err){
                products=JSON.parse(fileContent)
            }
            products.push(this)
            console.log(products)

            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err)
            })
        })
    }

    static fetchAll(cb){
        const p=path.join(path.dirname(process.memoryUsage().toString()),'data','products.json')
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([])
            }
            cb(JSON.parse(fileContent))
        })
        return products
    }
}