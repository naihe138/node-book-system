/**
 * @file
 * @author 何文林
 * @date 16/10/9
 */
var mongoose = require('mongoose');
var formidable = require('formidable');
var bookModule = require('../module/bookModule');

exports.showAdd = function(req, res, next){
  res.render('add.ejs');
};

exports.doAdd = function(req, res, next){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    bookModule.create(fields, function(err, result){
      res.redirect('/');
    });
  });
};

exports.showIndex = function(req, res, next){
  bookModule.findbook({}, function(err, result){
    res.render('index', {
      book: result
    });
  })
};

exports.showEdit = function(req, res, next){
  var id = req.query.id;
  // var sid = mongoose.Types.ObjectId(id);
  var sid = mongoose.mongo.ObjectId(id);
  bookModule.findbook({_id: sid}, function(err, result){
    res.render('edit.ejs', {
      name: result[0].name,
      author: result[0].author,
      readNumber: result[0].readNumber,
      id: id
    });
  })
};

exports.doEdit = function(req, res, next){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var sid = mongoose.mongo.ObjectId(fields.id);
    bookModule.updatebook({_id: sid}, {$set: {
      name: fields.name,
      author: fields.author,
      readNumber: fields.readNumber,
    }}, function(err, result){
      if (err) {
        console.log(err);
        return;
      }
      res.redirect('/');
    });
  });
};

exports.doDelete = function(req, res, next){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var sid = mongoose.mongo.ObjectId(fields.id);
    bookModule.removebook({_id: sid}, function(err, result){
      if(err){
        console.log(err);
        return;
      }
      res.json({status: true})
    })
  });
}