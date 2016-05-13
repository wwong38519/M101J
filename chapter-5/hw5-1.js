use blog

db.posts.aggregate([
	{$unwind: '$comments'},
	{$project: {comments: 1}},
	{$group: {
		_id: '$comments.author',
		count: {$sum: 1}
	}},
	{$sort: {count : 1}},
	{$limit: 10}
]);
//{ "_id" : "Cody Strouth", "count" : 68 }
//{ "_id" : "Devorah Smartt", "count" : 70 }
//{ "_id" : "Verdell Sowinski", "count" : 70 }
//{ "_id" : "Quincy Danaher", "count" : 70 }
//{ "_id" : "Myrtle Wolfinger", "count" : 71 }
//{ "_id" : "Rachell Aman", "count" : 72 }
//{ "_id" : "Whitley Fears", "count" : 72 }
//{ "_id" : "Tamika Schildgen", "count" : 72 }
//{ "_id" : "Mercedez Garduno", "count" : 73 }
//{ "_id" : "Fletcher Mcconnell", "count" : 73 }

db.posts.aggregate([
	{$unwind: '$comments'},
	{$project: {comments: 1}},
	{$group: {
		_id: '$comments.author',
		count: {$sum: 1}
	}},
	{$sort: {count : -1}},
	{$limit: 10}
])
//{ "_id" : "Gisela Levin", "count" : 112 }
//{ "_id" : "Echo Pippins", "count" : 108 }
//{ "_id" : "Terica Brugger", "count" : 107 }
//{ "_id" : "Mikaela Meidinger", "count" : 105 }
//{ "_id" : "Edgar Sarkis", "count" : 105 }
//{ "_id" : "Rudolph Domingo", "count" : 104 }
//{ "_id" : "Jaclyn Morado", "count" : 104 }
//{ "_id" : "Ernestine Macfarland", "count" : 104 }
//{ "_id" : "Bao Ziglar", "count" : 104 }
//{ "_id" : "Osvaldo Hirt", "count" : 103 }
