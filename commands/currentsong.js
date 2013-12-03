exports.name = 'currentsong';
exports.hidden = false;
exports.enabled = false;
exports.matchStart = false;
exports.handler = function(data) {
    var response = ('Returning song data');
    console.log(currentsong);
    output({text: response, destination: data.source, userid: data.userid});
}
