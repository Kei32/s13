var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

router.get('/', function(req, res, next) {
	var post = mongoose.model('post');
	var ids = '137311';

	post.find(function (err, posts) {
        if (err){
        	return console.error(err);
        	res.render('error', { message: 'Erorr', error: err});
        } 
        else{
        	posts.forEach(function(element, index) {
    			if (element.id == ids){
    				res.render('test', { title: element.header, post: element});
    			}
			});
		}
    });
});

module.exports = router;
