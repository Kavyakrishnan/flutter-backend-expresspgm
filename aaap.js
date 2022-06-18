var Express=require('express')
var Bodyparser=require('body-parser')

var app=Express()
app.use(Bodyparser({extended:false}))

app.use(Bodyparser.json())
app.get('/read',(req,res)=>{
    res.send("my app")
})
app.listen(3001,(req,res)=>{
    console.log("server is running")
})