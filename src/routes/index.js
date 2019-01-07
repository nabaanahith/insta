const express=require('express')
const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const router=express.Router()
const Instagram=require('node-instagram').default
const {clientId,clientSecret}=require('../keys').Instagram;


const  username='youruser'
password ='your password'
router.get('/login/:username/:password',(req,res)=>{

    username=req.params.username
    password=req.params.password
// then,both save in local storage
})
router.post('/post:/file/:caption',(req,res)=>{
    const client = new Instagram({ username, password ,FileCookieStore})
    

const photo = req.params.file//const photo = 'e.png'

function doHomework(callback) {
  
    sharp(photo)
   .resize(100,100)
   .toFile('namee.jpg', function(err) {
  
       console.log(typeof(r),'\n',typeof(photo))
})
    callback();
  }
  
  function alertFinished(){
    client
  .login()
  .then(() => {
   //  client
   //    .getProfile()
   //    .then(console.log)
   console.log('r',r)
  // const ee='name.jpg'
client.uploadPhoto({photo:'namee.jpg', caption: '❤️' }).then(data=>{
    console.log("data",data);
    
}).catch(e=>{
    console.log("ee1",e);
    

})
  })
}
  
doHomework( alertFinished);

//     client
//       .login()
//       .then(() => {
//        //  client
//        //    .getProfile()
//        //    .then(console.log)
//          //const photo = 'w.jpg'
//          const photo=req.params.file
//           const caption=req.params.caption
//           // client.uploadPhoto({ photo, caption: '❤️' }).then(data=>{
//             client.uploadPhoto({ photo, caption }).then(data=>{
//                console.log("data",data);
               
//            }).catch(e=>{
//                console.log("ee1",e);
               
//            })
//         }).catch(err=>{
//    console.log("errrrrrrr",err);
   
   
//         })
   



// })
// const instagram=new Instagram({
//     clientId:clientId,
//     clientSecret:clientSecret

// })
// router.get('/',(req,res)=>{

// //res.send('ok')
// //res.render('index')
// res.json({ ok: 'nabaa' })

// })







// const redirectUri='http://localhost:3000/handleauth'
// router.get('/auth/instagram',(req,res)=>{

// res.redirect(


//     instagram.getAuthorizationUrl(redirectUri,{

// scope:['basic','likes'],
// state: 'your state'

//     })
// )

// })


// router.get('/profile',async(req,res)=>{
// try{
//     const profiledata=await instagram.get('users/self')
// const media=await instagram.get('users/self/media/recent')

// //console.log('media',media);
// //console.log('media',media.data[0].images);


// //console.log('profiledata',profiledata);
// //console.log('media.data',media.data);

//     res.send({user:profiledata.data,post:media.data})

// }catch(e){
// console.log('err2',e);


// }

    
// })




 


//  router.get('/logout',(req,res)=>{}
//  )
//  router.get('/handleauth',async(req,res)=>{
// try{

//     const code = req.query.code;
//     console.log('codeeeeee',code);
    
//     const data = await instagram.authorizeUser(code, redirectUri);
//     //instagram.config.accessToken

// req.session.access_token=data.access_token
// req.session.user_id=data.user.id
// instagram.config.accessToken=req.session.access_token
// res.redirect('/profile')
// //console.log('in',instagram);



//     //console.log('dataaa:',data);
//     //res.json(data)

// }catch(err){
// console.log("err",err);
// res.json(err)


// }


//  }
//  )


//  router.get('/login',(req,res)=>{



//     res.redirect('/auth/instagram')
//  }
//  )
})

module.exports=router