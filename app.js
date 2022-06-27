var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({origin: '*'}));

var routes = require('./router');



app.use('/vttq',routes);

var server = app.listen(3000, function() {
  console.log('Server listening on port ' + server.address().port);
});

module.exports = app;