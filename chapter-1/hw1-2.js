use hw1-2

db.json.insert(
{ "city" = "New York", "population" = 7999034, "boroughs" = ["queens", "manhattan", "staten island", "the bronx", "brooklyn"] }
);
//2016-03-19T19:46:14.104+0800 E QUERY    [thread1] SyntaxError: missing : after property id @(shell):2:9

db.json.insert(
{ "title" : "Star Wars", "quotes" : [ "Use the Force", "These are not the droids you are looking for" ], "director" : "George Lucas" }
);
//WriteResult({ "nInserted" : 1 })

db.json.insert(
{ "a" : 1, "b" : { "b" : 1, "c" : "foo", "d" : "bar", "e" : [1, 2, 4] } }
);
//WriteResult({ "nInserted" : 1 })

db.json.insert(
{ "name" : "Fred Flinstone" ; "occupation": "Miner" ; "wife" : "Wilma" }
);
//2016-03-19T19:46:45.789+0800 E QUERY    [thread1] SyntaxError: missing } after property list @(shell):2:28

db.json.insert(
{}
);
//WriteResult({ "nInserted" : 1 })
