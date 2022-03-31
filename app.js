const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

// MongoDB Atlas Connection
// mongoose.connect('mongodb+srv://admin-chris:<password>@cluster0.rtfd3.mongodb.net/wikiDB');

// MongoDB Local Connection
mongoose.connect('mongodb://localhost:27017/wikiDB');


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

// Initial schema and document test
// const Article = mongoose.model('Article', articleSchema);
// const testArticle = new Article({title: 'WikiAPI', content: 'A RESTful API for getting article descriptions about certain full-stack tech tools, frameworks, or keywords.'});
// testArticle.save();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


//Heroku process port. If unavailable/local then default to 3000.
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started successfully");
});
