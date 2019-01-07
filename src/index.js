const express =require('express')
const app=express()
const morgan=require('morgan')
//const engine=require('ejs-mate')
//const path=require('path')
const session=require('cookie-session')
//middlewares

app.use(morgan('dev'))
app.use(session({
secret:'mysecretword',
signed:true

}))
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
//routes
app.use(require('./routes/index'))
//static files








//starting the server
//app.engine('ejs', engine);

app.set('port',process.env.PORT || 3000)
//app.engine('ejs', require('ejs').renderFile);
//app.set('view engine', 'ejs');
///app.set('views',path.join(__dirname,'views')) 

app.listen(app.get('port'),()=>{

console.log('server  running on port ',app.get('port'));


})