



function hideSidebar() {
  const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
  sidebar.style.display = 'none'; // Hide the sidebar
};














/*
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const app = express();

// Using bodyParser middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


var db = mongoose.connection;

// checks for connection
db.on('error', () => console.log("Error in connecting to the database"));
db.on('open', () => console.log("Connected to Database"));

// creates checking page
app.get("/", (req, res) => {
    return res.redirect('index.html');
});*/ 

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
  sidebar.style.display = 'none'; // Hide the sidebar
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
