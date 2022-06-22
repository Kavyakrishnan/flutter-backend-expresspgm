var Mongoose=require('mongoose')
var Studentschema=  Mongoose.Schema(
    {
        sname:{type:String,required:true,lowercase:true},
        sroll:Number,
        saddress:String,
        sadmno:String,
        smobno:Number,
        scollege:String,

       
    
    }
)
var StudentModel=Mongoose.model('students',Studentschema)
module.exports={StudentModel}

