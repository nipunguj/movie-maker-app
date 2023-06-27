const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')

mongoose.connect('mongodb+srv://gujarathinipun62:Abhini%4012345@movie-maker-app.spgm1my.mongodb.net/?retryWrites=true&w=majority',{
    UseNewURLParser: true,
    UseUnifiedTopology: true
}).then(()=>{
    console.log('MongoDB Connected!')
}).catch((err)=>{
    console.log('Error: ', err)
})

var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var rootValue = { hello: () => "Hello world!" }


app.use('/graphql',graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}))

app.get('/hi', (req,res)=>{
    res.send('Hello from the express server!!!')
})
app.listen('4000', ()=>{
    console.log('Server on port 4000!');
})