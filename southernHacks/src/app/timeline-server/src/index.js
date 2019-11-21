const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs     = require('fs');
var app = express();


var pool = mysql.createPool({
  connectionLimit : 100, // default = 10
  host     : '52.14.156.85',
  port     : '3306',
  user     : 'remoteuser',
  password : 'soccer',
  database : 'test',
 
});


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


// app.use(express.static(__dirname + '/Users/owenferreira/Desktop/SouthernProjectRoot/southernHacks/southernHacks/src/app'));
// app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.post('/submit', urlencodedParser, function (req, res) {
  console.log("Im here");
  console.log(req.body.name);
  console.log(req.body.last);
  console.log(req.body.email);
  console.log(req.body.school);
  console.log(req.body.major);
  console.log(req.body.ethnicity);
  console.log(req.body.skill);
  console.log(req.body.restrictions);
  console.log(req.body.team);


  pool.getConnection(function (err,connection) {
    if (err) throw err;
    console.log("connected");
    connection.query("INSERT INTO register (id, name, last, email, school, major, over18, gender, ethnicity, skill, dietrestriction, team) VALUES (NULL,'" + req.body.name + "', '" + req.body.last + "', '" + req.body.email + "', '" + req.body.school + "', '" + req.body.major + "', '" + req.body.over18 + "', '" + req.body.gender + "', '" + req.body.ethnicity + "', '" + req.body.skill + "', '" + req.body.restrictions + "', '" + req.body.team + "');", function (error, results, fields) {
      if (error) throw error;
      console.log('that was sent bro');
      res.status(204).end()
  });
});

});



const port = process.env.PORT || 3000;


   


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});