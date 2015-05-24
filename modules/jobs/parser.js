var commands = require('./commands');

function parseBody(body) {
    body = body.split(" ");
    var curCommands = commands.commands;
    if(!body[0] ||  body[0] === 'help') return commands.prettyCommands();
    for(var key in curCommands) {
        if(body[0] === key) {
            return curCommands[key](body);
        }
    }

    return "No valid commands found";
}

exports.parseBody = parseBody;