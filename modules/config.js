var authToken = process.env.TWIL_AUTH_TOKEN,
    SID = process.env.TWIL_SID,
    messagingUrl = process.TWIL_MESSAGE_URL;

var config = {
    twilio: {
        authToken: authToken,
        SID: SID,
        messagingUrl: messagingUrl,
        disableSigCheck: false
    }
};

module.exports = config;