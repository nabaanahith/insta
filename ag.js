var Agenda = require('agenda');
 
var connectionString = "127.0.0.1:27017/scheduled_jobs";
var agenda = new Agenda({db: { address: connectionString, collection: 'jobs' }});
EmailService = {
    send:function(callback){
        console.log("hi");
        callback();
    }
};
agenda.define('send email', function(job, done) {
    EmailService.send(function(err,result) {
        if(err) {
            done(err);
        } else {
            done();  


            
        }
    });  
});
agenda.on('ready',function() {
    agenda.every('* * * * *',()=>{

console.log('hi');


    });//every minute will print hi so,we can use time we choose to scedule post function 
    
    agenda.start();
   });
 