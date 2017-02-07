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
	/*
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "Miragem Hotel",
		"type":"IoT umbrella",
		"description": "umbrella",
		"distance": "0.0 km",
		"nb": "",
		"discovered": false
	},
	*/
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "Hotel Estoril",
		"type":"IoT eReader",
		"description": "umbrella",
		"distance": "0.8 km",
		"nb": "",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"location": "Cascais Train Station",
		"type":"IoT device",
		"description": "umbrella",
		"distance": "0.9 km",
		"nb": "",
		"discovered": false
	}
	]
);
