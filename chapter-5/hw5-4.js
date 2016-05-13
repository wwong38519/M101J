use test

db.zips.count()
//29467

db.zips.aggregate([
	{$project: {
		first_char: {$substr: ["$city",0,1]},
		pop: '$pop'
	}},
	{$match: {
		first_char: /[0-9]/
	}},
	{$group: {
		_id: 0,
		sum: {$sum: '$pop'}
	}}
])
//{ "_id" : 0, "sum" : 298015 }