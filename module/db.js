/**
 * @file
 * @author 何文林
 * @date 16/10/9
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/book');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库链接成功')
});

module.exports = db;