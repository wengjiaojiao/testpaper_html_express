var express = require('express')
var app = express()
var ejs = require('ejs');
var bodyParser = require('body-parser');
var _ = require('./public/lodash.src.js');
var scoreGetter = require('./scoreGetter');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.engine(".html",ejs.__express);
app.set("view engine",'html');

app.get('/', function (req, res) {
  res.render("testPaper_v1",{});
})

app.post('/result', function(req, res) {
<<<<<<< HEAD
  console.log(req.body);
  res.render("resultshow",{
    username:req.body.name,
    userclass:req.body.class,
    userid:req.body.id,
    userscore:req.body.score
  })
})
=======
  var infors = req.body;
  var sumScore = scoreGetter(infors);

  console.log(sumScore);
  res.send(sumScore + "");


});
>>>>>>> 3467554fdd8f17ab2f8dcff42d3b349388df0f8b

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
