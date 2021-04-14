const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true});
client.connect(err => {
    console.log("MongoDB database connection established successfully");
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});