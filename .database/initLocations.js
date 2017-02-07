/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initLocations.js")

*/

//Locations
db.locations.drop();
db.createCollection("locations");
db.locations.insert([
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "location1",
		"type":"IoT umbrella",
		"description": "umbrella",
		"distance": "0.8 km",
		"nb": "",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "location3",
		"type":"IoT eReader",
		"description": "umbrella",
		"distance": "0.2 km",
		"nb": "",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "location7",
		"type":"IoT device",
		"description": "umbrella",
		"distance": "2.1 km",
		"nb": "",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "location11",
		"type":"IoT device",
		"description": "umbrella",
		"distance": "3.0 km",
		"nb": "",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "location6",
		"type":"IoT umbrella",
		"description": "umbrella",
		"distance": "0.4 km",
		"nb": "",
		"discovered": false
	}]
);
