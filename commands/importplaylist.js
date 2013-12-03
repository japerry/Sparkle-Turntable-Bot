exports.name = 'importplaylist';
exports.hidden = false;
exports.enabled = true;
exports.matchStart = false;
exports.handler = function(data) {
    var response = ('Returning playlist data');

   // 900 // long
  //  120 // short
    client.query('SELECT songid FROM (select * from '
           + config.database.dbname + '.' + config.database.tablenames.song
           + ' group by concat(song, \' by \', artist)) as songtbl WHERE songid <> \'\'',
               function select(error, results, fields) {
                results.forEach(function(result) {
                    //console.log(result);
                    setTimeout(function() {
                        bot.playlistAll('short', function (data) {
                            bot.playlistAdd('short', result.songid, data.list.length, function (plres) {
                                console.log(plres);
                            });
                        });
                   	}, 4 * 1000);
                })
               });
/*
    bot.playlistSwitch('Trance', function(data) {
        bot.playlistAll('Trance', function(data2) {
            console.log(data);
            console.log(data2);
            console.log(data2.list[0].metadata);
        });
    });
    */
    output({text: response, destination: data.source, userid: data.userid});
}
