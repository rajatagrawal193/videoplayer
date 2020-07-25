console.log("Inside api.js")

const express = require('express');
const router = express.Router();


const Video = require('../models/video');
var jsonVideos = require('../../data/videos.json');
// var jsonVideos =  require('https://api.myjson.com/bins/p71w4');

const dbtemp = "mongodb://userrohan:rohanrohan@ds119223.mlab.com:19223/videoplayer";
// const dbtemp = "mongodb://localhost/myapp";


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbtemp, function (err) {
  if (err) {
    console.error("Error!" + err);
  } else console.log("database connected");

})

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/videoplayer', function(err){
//     if(err){
//         console.error("Error!" + err);
//     }
//     else console.log("database connected");

// }
// );

router.get('/videos', function (req, res) {
  console.log('Get request for all videos');
  Video.find({})
    .exec(function (err, videos) {
      if (err) {
        console.log("Error retrieving videos");
      } else {
        res.json(videos);
      }
    });
  // console.log("/videos api reached")
  // ans=[{
  //     url:"safsf",
  //     description: "adfasdf",
  //     title: "afdsfas"

  // }]
  // res.json(jsonVideos);
});

router.get('/videos/:id', function (req, res) {
  console.log('Get request for single videos');
  Video.findById(req.params.id)
    .exec(function (err, video) {
      if (err) {
        console.log("Error retrieving video");
      } else {
        res.json(video);
      }
    });
});

// router.get('pdf', function(req,res){
//     console.log('get request for pdf')


// })

router.get('', function (req, res) {
  res.send("api works");
});

router.get("/test", function (req, res) {
  res.send("test works");
  console.log("test works");
});

router.post('/video', function (req, res) {
  console.log('Post a video')
  var newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  newVideo.save(function (err, insertedVideo) {
    if (err) {
      console.log('error saving video')
    } else {
      res.json(insertedVideo);
    }
  });
});

router.put('/video/:id', function (req, res) {
  console.log('update a video');
  Video.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description
      }
    }, {
      new: true
    },
    function (err, updatedVideo) {
      if (err) {
        res.send("error updating video");
      } else {
        res.json(updatedVideo);
      }
    }
  )

})

router.delete('/video/:id', function (req, res) {
  console.log('deleting a video');
  Video.findByIdAndRemove(req.params.id, function (err, deletedVideo) {
    if (err) {
      res.send('error deleting video');
    } else {
      res.json(deletedVideo);
    }
  });
})

router.get('pdf', function (req, res) {

})
module.exports = router;
