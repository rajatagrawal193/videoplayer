// var http= require('http');
// const https = require('https');
// app.use(express.static(path.join(__dirname,'distributable')));

// function get_videos(){
// console.log("request for videos");
// var videos= http.get('localhost:3000/videos');
// }
theUrl="localhost:3000/videos";
function get_videos()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
};

function change_color(){
    var my_div= document.getElementById("mydiv");
    // if (my_div.style.color=="blue") {my_div.style["color"]=="red";}
    // else {my_div.style["color"]=="blue";}
    my_div.style["color"]="blue";
    // console.log(my_div.style.color);
    // document.write("You're and idiot");
    my_div.style["background-color"]="red";
    
}