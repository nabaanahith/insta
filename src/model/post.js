const mongoose=require('mongoose');

var schema=mongoose.Schema;
const userschema=new schema({


img:{

   
    require:true,
  //  match:something,
  
    // minsize:320px,
    // maxwidth:1080px
},
caption:{type:String,
    required:true,
    maxlength: 125


}



});



















module.exports=mongoose.model('user',userschema);