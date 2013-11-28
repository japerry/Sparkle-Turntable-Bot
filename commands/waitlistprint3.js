exports.name = 'q';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (config.enforcement.waitlist) {
        var response = 'Hello, '+data.name+'! Basic commands: Say \'#\' to view the queue size (currently '+waitlist.length+'). Add/remove yourself from queue with \'+\' and \'-\'. To DJ, please use the queue and be active (by voting/speaking) in the room.';
        output({text: response.substring(0, response.length - 2), destination: data.source,
            userid: data.userid});
    }
}