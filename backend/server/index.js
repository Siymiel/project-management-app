const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {  graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const colors = require('colors');
const connectDB = require('./config/db')

const port = process.env.PORT;

const app = express();

// Connect to MongoDB
connectDB();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173',
  }));
  

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
}))

app.listen(port, console.log(`server running on PORT: ${port}`))

 