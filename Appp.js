const express = require("express");
const app = express();
const mongoose = require("mongoose");
const joi = require("joi");
const uuidv1 = require("uuid/v1");

const Instagram = require('instagram-web-api')
const sharp=require('sharp')
const FileCookieStore = require('tough-cookie-filestore2')
const fileupload = require("express-fileupload");
mongoose.connect(
  "mongodb://apissss:12345naba54321@ds031867.mlab.com:31867/try",
  { useNewUrlParser: true }
);

//  To Check if the connection works fine or not
mongoose.connection.on("connected", () => {
  console.log("\x1b[36m%s\x1b[0m", "mongo has been connected...");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(fileupload());

app.use(express.static("./upimg"));
app.use(express.static("./upfile"));

app.get('/', function (req, res){
  res.sendFile(__dirname + '/main.html');
});
app.post("/", (req, res) => {
  const validating = validationSchema(req.body);
  //  If the validation fails
  if (validating.error) {
    res.status(400).send(validating.error.details[0].message);
  } else {

    var img = req.files.img;
    var name1 = img.name;
    var bookImgUud = uuidv1();
    const bookImgPath = "./" + bookImgUud + name1;
    var imgdb = bookImgUud + name1;
   var x=__dirname +imgdb+'.jpg'

    img.mv(bookImgPath);
    console.log('img',img.data,'\n','name1',name1,'\n','bookImgPath',bookImgPath,'\n','imgdb',imgdb,'\n',)
const  username='--'
password ='--'
const client = new Instagram({ username, password ,FileCookieStore})

const photo =name1
doHomework( alertFinished);
 function doHomework(callback) {
  
    sharp(img.data)
   .resize(100,100)
   .toFile('namee.jpg', function(err) {
  console.log(err);
  
       console.log('\n',typeof(photo))
       
})


 callback();
  }




   function alertFinished(){
     client
   .login()
   .then(() => {
  client
    .getProfile()
   .then(console.log)
 
 const ee='name.jpg'
client.uploadPhoto({photo:'namee.jpg', caption: '❤️' }).then(data=>{
     console.log("data",data);
    
 }).catch(e=>{
     console.log("ee1",e);
    

 })
   })
 }
  

 }
 })

port =  8000;
app.listen(port, () =>
  console.log(`the server connect on http://localhost:${port}`)
);
  
function validationSchema(result) {
  var schema = joi.object().keys({

    img: joi.string(),
  
  });
  return joi.validate(result, schema);
}


module.exports = app;














//=======================
