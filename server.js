var connect = require('connect');
var serveStatic = require('serve-static');

var port = 80;
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log('Server running on 8080...');
});
