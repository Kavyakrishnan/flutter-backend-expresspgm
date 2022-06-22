var Express=require("express")
var Bodyparser=require('body-parser')
var Mongoose=require('mongoose')
var{StudentModel}=require('./Model/StudentModel')
module.exports={StudentModel}
Mongoose.connect("mongodb+srv://kavya:12345@cluster0.2q4qp.mongodb.net/studentflutterdb")


var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.post('/search',async(req,res)=>{
    try{
        var result=await StudentModel.find(req.body) 
        res.json(result)
    }
  catch(error){
    res.json(error)
  }



})
app.post('/delete',async(req,res)=>{
    try{
var result= await StudentModel.findByIdAndDelete({"_id":req.body._id})
res.json(result)
    }
    catch(error)
    {
res.json(error)
    }
})
app.post('/edit',async(req,res)=>{
    try{
var result=await StudentModel.findByIdAndUpdate({"_id":req.body._id},req.body)
res.json(result)
    }
    catch(error){
        res.json(error)

    }
})
app.get('/view',async(req,res)=>{
    try{
        var result=await StudentModel.find()
        res.send(result)
    }
    catch(error){
        res.send(error)
    }
    
})
app.post('/read',(req,res)=>{
    var StudenObject=new StudentModel(req.body)
    StudenObject.save((error)=>{
        if(error){
res.send({"status":error})
        }
        else
        {
res.send({"status":"success"})
        }
    })
   
    
   

})
app.listen(3008,(req,res)=>{
    console.log("server is running")
})
