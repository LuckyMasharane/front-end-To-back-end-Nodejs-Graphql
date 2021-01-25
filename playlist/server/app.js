const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds157833.mlab.com:57833/register');
mongoose.connection.once('open', ()=> {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,() => {
    console.log('Now listening for request on port 4000')
});

