/**
 * @file
 * @author 何文林
 * @date 16/10/9
 */
var db = require('./db');
var bookSchema = require('./bookSchema');
var bookModule = db.model('book', bookSchema);

module.exports = bookModule;