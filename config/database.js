

//const uri= 'mongodb+srv://sam:Shomendra@cluster0-jclag.mongodb.net/test?retryWrites=true&w=majority'
 
if(process.env.Node_ENV === 'production') {
   module.exports = {mongoURI : 'mongodb+srv://sam:Shomendra@cluster0-jclag.mongodb.net/test?retryWrites=true&w=majority'
  }
}else{
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }

}



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://sam:Shomendra>@cluster0-jclag.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// MongoClient.connect(uri, function(err, client) {
//   if(err) {
//        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//   }
//   console.log('Connected...');
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
