//Snags a song to the bot's playlist

exports.name = '.songsucks';
exports.hidden = true;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
	if(admincheck(data.userid)) {
        if(global.isdjing && currentsong.djid == config.botinfo.userid) {
            bot.stopSong();
            bot.playlistAll('Trance', function (data) {
    			bot.playlistRemove('Trance', 0);
    		});

    		output({text: 'Okay okay, skipping and removing from playlist, ' + data.name + '!', destination: data.source, userid: data.userid});
        } else {
            output({text: "I'm not DJing! ;-)", destination: data.source, userid: data.userid});
        }
	}
}