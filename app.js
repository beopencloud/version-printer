const hostname = '127.0.0.1';
const port = 8085;

const express = require('express');


var cors = require('cors')

const app = express();
var corsOptions = {
  origin: '*',
}
var bodyParser = require('body-parser');
//ar multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors(corsOptions));
app.use(express.static('./ui/dist/ab-testing/'))
app.get('/ui', (req, res) =>{
  res.sendFile('./ui/dist/ab-testing/index.html',{root: __dirname})
})
app.get('/version', (req, res) =>{
   // console.log(req.keyValues);
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');

    // const responseData ={
    //   version: "v5.0.0",
    //   couleur:"blue"
    // }
    res.send({version: "v5.0.0", couleur:"blueeee"});
});
app.listen(8085);
