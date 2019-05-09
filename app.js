var express = require('express')
var app = express()

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.render('welcome')
})
app.get('/index', function(req, res){
    res.render('index')
})
app.listen(8000, function(){
    console.log("listening on port 8000")
})