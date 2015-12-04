var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , ECT = require('ect')
  , port = process.env.PORT || 3000;

var ectRenderer = ECT({ watch: true, root: __dirname + '/views', ext : '.ect' });

app.set('views', __dirname + '/views');
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('./controllers'));

app.listen(port, function() {
  console.log('Listening on port ' + port)
});