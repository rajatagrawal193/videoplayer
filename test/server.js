
//Creating an instace of express
var express = require('express');
var app = express();
var apis= require('./routes.js');
const path = require ('path');
const http= require("http");

const bodyParser = require('body-parser');  
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json()); 

app.set('view engine', 'pug');
app.set('views','./views');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/videoplayer', function(err){
    if(err){
        console.error("Error!" + err);
    }
    else console.log("database connected");
    
}
);

app.use(express.static(path.join(__dirname,'dist')));

app.get('/videos', function(req, res){
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        }else {
            res.json(videos);
        }
    });
});


app.get('/first_template', function(req, res){
   res.render('first_view');
});

app.use(express.static('public'));
app.use('/api', apis)

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "dist/index.htm" );
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});

app.post('/process_post', function (req, res) {
   // Prepare output in JSON format
   response = {
      name:req.body.name,
      gender:req.body.gender,
      age: req.body.age
   };
   console.log(response);
   res.send(JSON.stringify(response));
});

// app.get('/videos', function(req, res){
//     console.log('Get request for all videos');
//     console.log("/videos api reached")
//     ans=[{
//         url:"safsf",
//         description: "adfasdf",
//         title: "afdsfas"

//     }]
//     res.json(ans);
// });

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app l,ning at http://%s:%s", host, port)
})  