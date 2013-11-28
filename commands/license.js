exports.name = '.license';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    var response = '©2012 sharedferret. Im open source! Full license details at http://git.io/sparklelicense';
    output({text: response, destination: data.source, userid: data.userid});
}