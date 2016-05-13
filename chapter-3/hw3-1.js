use school

db.students.find( { _id : 137 } ).pretty( )
//{
//	"_id" : 137,
//	"name" : "Tamika Schildgen",
//	"scores" : [
//		{
//			"type" : "exam",
//			"score" : 4.433956226109692
//		},
//		{
//			"type" : "quiz",
//			"score" : 65.50313785402548
//		},
//		{
//			"type" : "homework",
//			"score" : 89.5950384993947
//		},
//		{
//			"type" : "homework",
//			"score" : 54.75994689226145
//		}
//	]
//}

var lowest = db.students.aggregate([{$unwind: '$scores'}, {$match: {'scores.type': 'homework'}}, {$group: {_id: '$_id', score: {$min: '$scores.score'}}}]);

lowest.forEach(function(x) { db.students.update({_id: x._id}, {$pull: {scores: {type: 'homework', score: x.score}}}) });

db.students.find( { _id : 137 } ).pretty( )
//{
//	"_id" : 137,
//	"name" : "Tamika Schildgen",
//	"scores" : [
//		{
//			"type" : "exam",
//			"score" : 4.433956226109692
//		},
//		{
//			"type" : "quiz",
//			"score" : 65.50313785402548
//		},
//		{
//			"type" : "homework",
//			"score" : 89.5950384993947
//		}
//	]
//}

db.students.aggregate( { '$unwind' : '$scores' } , { '$group' : { '_id' : '$_id' , 'average' : { $avg : '$scores.score' } } } , { '$sort' : { 'average' : -1 } } , { '$limit' : 1 } )
//{ "_id" : 13, "average" : 91.98315917172745 }