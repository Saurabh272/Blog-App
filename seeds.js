// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment = require("./models/comment");


// var data = [
// 	{
// 		name: "Cloud's Rest",
// 		image: "https://tse4.mm.bing.net/th?id=OIP.xNmnKRhmvYpcwxdviE3BJgHaE1&pid=Api&P=0&w=253&h=166",
// 		description: "blah blah blah!"
// 	},
// 	{
// 		name: "Desert Mesa",
// 		image: "https://tse4.mm.bing.net/th?id=OIP.ERVvPWoX0nGCV3fitN_LYAHaFj&pid=Api&P=0&w=204&h=154",
// 		description: "blah blah blah!"
// 	},
// 	{
// 		name: "Canyon Floor",
// 		image: "https://tse1.mm.bing.net/th?id=OIP.nxKHmGzgzqIDDOyuj7VygQHaFj&pid=Api&P=0&w=205&h=154",
// 		description: "blah blah blah!"
// 	}
]

// function seedDB(){
// 	//Remove all campgrounds
// 	Campground.deleteMany({}, function(err){
// 	if(err){
// 		console.log(err);
// 	}
// 	console.log("removed campgrounds!");
// 		//add a few campgrounds
// 	data.forEach(function(seed){
// 		Campground.create(seed, function(err, campground){
// 			if(err){
// 			    console.log(err);
// 		    } else {
// 				console.log("added a campground");
// 				// create a comment
// 				Comment.create(
// 					{
// 						text: "This place is great, but I wish there was internet",
// 						author: "Homer"
// 					}, function(err, comment){
// 						if(err){
// 							console.log(err);
// 						} else {
// 							campground.comments.push(comment);
// 							campground.save();
// 							console.log("Created a new comment");
// 						}
// 					}
// 				)
// 			}
// 	     });
// 	});
// });

	
// 	//add a few comments
// }

// module.exports = seedDB;
