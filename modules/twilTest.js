var config = require('./config'),
    accountSid = config.twilio.SID,
    authToken = config.twilio.SID
    client = require('twilio')(accountSid, authToken);

exports.sendText = function(to, from, body, callback) {
    client.messages.create({
        to: to,
        from: from,
        body: body
    }, function(err, message) {
        if(callback) callback(message)
    });
};