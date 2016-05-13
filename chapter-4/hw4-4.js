use m101
db.profile.find({op:"query", ns:"school2.students"}).sort({millis: -1}).limit(1).pretty()
//{
//	"_id" : ObjectId("570930f22808334cb0a0f30e"),
//	"ts" : ISODate("2012-11-20T20:09:49.862Z"),
//	"op" : "query",
//	"ns" : "school2.students",
//	"query" : {
//		"student_id" : 80
//	},
//	"ntoreturn" : 0,
//	"ntoskip" : 0,
//	"nscanned" : 10000000,
//	"keyUpdates" : 0,
//	"numYield" : 5,
//	"lockStats" : {
//		"timeLockedMicros" : {
//			"r" : 19776550,
//			"w" : 0
//		},
//		"timeAcquiringMicros" : {
//			"r" : 4134067,
//			"w" : 5
//		}
//	},
//	"nreturned" : 10,
//	"responseLength" : 2350,
//	"millis" : 15820,
//	"client" : "127.0.0.1",
//	"user" : ""
//}

db.profile.find({op:"query", ns:"school2.students"}, {millis: 1}).sort({millis: -1}).limit(1)
//{ "_id" : ObjectId("570930f22808334cb0a0f30e"), "millis" : 15820 }