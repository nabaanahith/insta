const Agenda = require('agenda');
const mongoose = require("mongoose");


async function run() {
    const db= await mongoose.connect(
        "mongodb://apissss:12345naba54321@ds031867.mlab.com:31867/try",
        { useNewUrlParser: true }
      );
  // Agenda will use the given mongodb connection to persist data, so jobs
  // will go in the "agendatest" database's "jobs" collection.
  const agenda = new Agenda().mongo(db, 'jobs');

  // Define a "job", an arbitrary function that agenda can execute
  agenda.define('hello', () => {
    console.log('Hello, World!');
    process.exit(0);
  });

  // Wait for agenda to connect. Should never fail since connection failures
  // should happen in the `await MongoClient.connect()` call.
  await new Promise(resolve => agenda.once('ready', resolve));

  // Schedule a job for 1 second from now and persist it to mongodb.
  // Jobs are uniquely defined by their name, in this case "hello"
  agenda.schedule(new Date(Date.now() + 1000), 'hello');
  agenda.start();
}

run().catch(error => {
  console.error(error);
  process.exit(-1);
});