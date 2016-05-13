db.grades.aggregate([
	{$unwind: '$scores'},
	{$match: {'scores.type': {$ne: 'quiz'}}},
	{$group: {
		_id: {
			student_id: '$student_id',
			class_id: '$class_id'
		},
		score: {$avg: '$scores.score'}
	}},
	{$group: {
		_id: '$_id.class_id',
		score: {$avg: '$score'}
	}},
	{$sort: {score: 1}},
	{$limit: 5}
])
//{ "_id" : 2, "score" : 37.61742117387635 }
//{ "_id" : 12, "score" : 40.62345969481145 }
//{ "_id" : 8, "score" : 41.30388381000019 }
//{ "_id" : 28, "score" : 41.59824801397287 }
//{ "_id" : 30, "score" : 42.71200726236121 }

db.grades.aggregate([
	{$unwind: '$scores'},
	{$match: {'scores.type': {$ne: 'quiz'}}},
	{$group: {
		_id: {
			student_id: '$student_id',
			class_id: '$class_id'
		},
		score: {$avg: '$scores.score'}
	}},
	{$group: {
		_id: '$_id.class_id',
		score: {$avg: '$score'}
	}},
	{$sort: {score: -1}},
	{$limit: 5}
])
//{ "_id" : 1, "score" : 64.50642324269175 }
//{ "_id" : 5, "score" : 58.08448767613548 }
//{ "_id" : 20, "score" : 57.6309834548989 }
//{ "_id" : 26, "score" : 56.06918278769095 }
//{ "_id" : 9, "score" : 55.56861693456625 }

