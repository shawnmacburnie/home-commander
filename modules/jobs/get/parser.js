var commands = require('./commands');

function parseBody(body) {
    var curCommands = commands.commands;
    if(body.length < 2 || !body[1]) return commands.prettyCommands();
    for(var key in curCommands) {
        if(body[1] === key) {
            return curCommands[key](body);
        }
    }
    return "No valid commands found";
}

exports.parseBody = parseBody;