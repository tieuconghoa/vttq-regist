var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({origin: '*'}));

var routes = require('./router');



app.use('/vttq',routes);

var server = app.listen(process.env.PORT || 3000, () => {
  console.log("server running!!!");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = app;