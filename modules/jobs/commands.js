var commands =  {
    get: require('./get/parser').parseBody
};

function getCommands() {
    var com = "Commands: "
    for(var key in commands) {
        com += key + ' ';
    }
    return com;
}

exports.commands = commands;
exports.prettyCommands = getCommands;