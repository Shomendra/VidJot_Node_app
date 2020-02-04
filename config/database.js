if(process.env.Node_ENV === 'production') {
   module.exports = {mongoURI : 'mongodb+srv://VideoList:Shomendra@cluster0-wrcnu.mongodb.net/test?retryWrites=true&w=majority'
  }
}else{
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }

}


