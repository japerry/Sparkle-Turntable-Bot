exports.name = 'bop';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    if (admincheck(data.userid)) {
        bot.upvote();
    }
}