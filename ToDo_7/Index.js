const readlineSync = require ("readline-sync")
const express = require ('express')
const app = express()

app.listen(3000, (err)=> {
    if(err){
        console.log('400! iiiii não rodo')
    } else {
        console.log('200! Ta rodando')
        
    }
});

    const somar = (num1, num2) => {
        return parseInt(num1) + parseInt(num2)
    }
    const multiplicar = (num1, num2) => {
        return parseInt(num1) * parseInt(num2);
    }
    const dividir = (num1, num2) => {
        return parseInt(num1) / parseInt(num2)
    }
    const subtrair = (num1, num2) => {
        return parseInt(num1) - parseInt(num2)
    }



    app.get("/soma", (req, res) => {
        const n1 = readlineSync.question('digite um numero: ');
        const n2 = readlineSync.question('digite um segundo numero: ');
        const response = somar(n1,n2)
    res.send(`<h1>${response}</h1>`)
   
    })           
    app.get("/multiplicar", (req,res)=>{
        const n1 = readlineSync.question('digite um numero: ');
        const n2 = readlineSync.question('digite o numero a ser multiplicado: ');
        const response = multiplicar(n1,n2)
        res.send(`<h1>${response}</h1>`)
    })       
    app.get("/dividir", (req,res)=>{
        const n1 = readlineSync.question('digite um numero: ');
        const n2 = readlineSync.question('digite um numero a ser dividido: ');
        const response = dividir(n1,n2)
        res.send(`<h1>${response}</h1>`)
    })    
    app.get("/subtrair", (req,res)=>{
        const n1 = readlineSync.question('digite um numero: ');
        const n2 = readlineSync.question('digite um numero a ser subtraido: ');
        const response = subtrair(n1,n2)
        res.send(`<h1>${response}</h1>`)
    })





module.export = somar
module.export = dividir
module.export = multiplicar
module.export = subtrair