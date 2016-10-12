
var mongoose = require('mongoose');
var bookSchema = new mongoose.Schema({
  name: String,
  author: String,
  readNumber: Number
});

bookSchema.statics.findbook = function (obj, callback) {
  this.find(obj, callback);
};

bookSchema.statics.updatebook = function (obj, newObj, callback) {
  this.update(obj, newObj,callback);
};

bookSchema.statics.removebook = function (obj, callback) {
  this.remove(obj,callback);
};

module.exports = bookSchema;