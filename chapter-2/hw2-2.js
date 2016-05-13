use students
db.grades.count()
//800
db.grades.aggregate({'$group':{'_id':'$student_id', 'average':{$avg:'$score'}}}, {'$sort':{'average':-1}}, {'$limit':1})
//{ "_id" : 164, "average" : 89.29771818263372 }
db.grades.find({'type': 'exam', 'score': {$gte: 65}}).sort({'score': 1}).limit(5)
//{ "_id" : ObjectId("50906d7fa3c412bb040eb5cf"), "student_id" : 22, "type" : "exam", "score" : 65.02518811936324 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb743"), "student_id" : 115, "type" : "exam", "score" : 65.47329199925679 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb637"), "student_id" : 48, "type" : "exam", "score" : 65.71867938396781 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb65b"), "student_id" : 57, "type" : "exam", "score" : 65.91867871499709 }
//{ "_id" : ObjectId("50906d7fa3c412bb040eb6d3"), "student_id" : 87, "type" : "exam", "score" : 66.0470217410135 }//