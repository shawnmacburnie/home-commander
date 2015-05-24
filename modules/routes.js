var twilio = require('twilio'),
    config = require('./config'),
    tp = require('./jobs/parser'),
    request = require('request'),
    torr = require('utorrent-api'),
    reqInfo = require('./jobs/get/categorys'),
    Hapi;

module.exports = function(hapi) {
    Hapi = hapi
    return exports;
};

function sms(request, reply) {
    var params = request.params,
        payload = request.payload,
        resp = new twilio.TwimlResponse();
        message = tp.parseBody(payload.body);
    resp.message(message);
    reply(resp.toString()).type('text/xml');
}

function helloWorld(request, reply) {
    reply('Hello, world!');
}

function getCategorys(request, reply) {
    reply(reqInfo.getCategorys());
}
function getSubCategorys(request, reply) {
    reply(reqInfo.getSubCategorys());
}

exports.getSubCategorys = getSubCategorys;
exports.getCategorys = getCategorys;
exports.sms = sms;
exports.helloWorld = helloWorld;