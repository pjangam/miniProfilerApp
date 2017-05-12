var restify = require('restify');

function respond(req, res, next) {
    res.json(req._timerMap);
    next();
}

var server = restify.createServer();
server.get('/miniprofile', testmw1, testmw2, respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});


function testmw1(req, res, next) {
    next();
}


function testmw2(req, res, next) {
    next();
}