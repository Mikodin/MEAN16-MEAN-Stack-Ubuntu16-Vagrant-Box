//Copy pasted from https://gist.github.com/marlun78/10755657

var app, server,
    express = require('express'),
    path = require('path'),
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 8081,
    root = path.resolve(__dirname, '..');
 
app = express();
app.use(function(req, res, next) { console.log(req.url); next(); });
app.use(express.static(root + '/public'));
server = app.listen(port, host, serverStarted);
 
function serverStarted () {
    console.log('Server started', host, port);
    console.log('Root directory', root);
    console.log('Press Ctrl+C to exit...\n');
}
