import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✔️Connected to DB")
const handleError = (error) => console.log("BD Error", error);

db.on("error", handleError);
db.once("open", handleOpen);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});