var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000, routes: {cors: true}});
var routes = require('./modules/routes')(Hapi);

server.route({
    method: 'GET',
    path: '/',
    handler: routes.helloWorld
});

server.route({
    method: 'GET',
    path: '/catagory',
    handler: routes.getCategorys
});

server.route({
    method: 'GET',
    path: '/subcatagory',
    handler: routes.getSubCategorys
});

server.route({
    method: 'POST',
    path: '/sms',
    config: {
        cors: { origin : ['*'] },
        handler: routes.sms,
        payload: {
            output: 'data',
            parse: true
        }
    }
});

server.register({
    register: require('good'),
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                log: '*',
                response: '*'
            }
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});