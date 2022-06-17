var Express=require('express')
var app=Express()
app.get('/',(req,res)=>{
    res.send(" Welcome to my expresspgm nodejs")
})
app.post('/read',(req,res)=>{
    var getName=req.body.name;
    var getRoll=req.body.roll
    res.json(getName + "   "+ getRoll)

  
})
app.post('/view',(req,res)=>{
    var getName=req.body.name
    var getRoll=req.body.roll
    res.json({"name":getName,"roll":getRoll})
})
app.post('/add',(req,res)=>{
    var getNum1= parseFloat(req.body.Num1)
    var getNum2=parseFloat(req.body.Num2)
    var result=getNum1+getNum2
    res.json({"result":result})
}
)
app.listen( process.env.PORT ||  3000,(req,res)=>{
    console.log("server")
})