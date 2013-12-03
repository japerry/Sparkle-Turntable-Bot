exports.name = 'anh';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    var response = ('/tableflip');
    output({text: response, destination: data.source, userid: data.userid});
}
