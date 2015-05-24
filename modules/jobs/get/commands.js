var pc = require('../commands'),
    commands =  {
        categorys: require('./categorys').getCategorys,
        subCategorys: require('./categorys').getSubCategorys
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