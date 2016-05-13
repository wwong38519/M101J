use test

db.zips.findOne()
//{
//	"_id" : "92278",
//	"city" : "TWENTYNINE PALMS",
//	"loc" : [
//		-116.06041,
//		34.237969
//	],
//	"pop" : 11412,
//	"state" : "CA"
//}

db.zips.aggregate([{$group: {_id:'$state', count:{$sum:1}}}])
//{ "_id" : "NY", "count" : 50 }
//{ "_id" : "NJ", "count" : 50 }
//{ "_id" : "CT", "count" : 50 }
//{ "_id" : "CA", "count" : 50 }



db.zips.aggregate([
	{$match: {
		state: {$in: ['CT','NJ']}, 
	}},
	{$group: {
		_id: {city: '$city', state: '$state'},
		pop: {$sum: '$pop'}
	}},
	{$match: {
		pop: {$gte: 25000}, 
	}},
	{$group: {
		_id: 0,
		pop: {$avg: '$pop'}
	}}
])
//{ "_id" : 0, "pop" : 38176.63636363636 }


db.zips.aggregate([
	{$match: {
		state: {$in: ['CA','NY']}, 
	}},
	{$group: {
		_id: {city: '$city', state: '$state'},
		pop: {$sum: '$pop'}
	}},
	{$match: {
		pop: {$gte: 25000}, 
	}},
	{$group: {
		_id: 0,
		pop: {$avg: '$pop'}
	}}
])
//{ "_id" : 0, "pop" : 44804.782608695656 }