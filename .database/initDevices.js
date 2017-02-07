/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initDevices.js")

*/

//Devices
db.devices.drop();
db.createCollection("devices");
db.devices.insert([
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"nb": "Device 3",
		"name":"Afonso Correia Sousa",
		"description": "Primeiro segredo",
		"challenge": "Submit secret",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"nb": "Device 15",
		"name":"Anabela Araújo Rodrigues",
		"description": "Segundo segredo",
		"challenge": "Submit secret",
		"discovered": false
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"nb": "Device 18",
		"name":"André Gonçalo Ferreira",
		"description": "Terceiro segredo",
		"challenge": "Submit secret",
		"discovered": false		
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"nb": "Device 21",
		"name":"André Gonçalo Ferreira",
		"description": "Terceiro segredo",
		"challenge": "Submit secret",
		"discovered": false		
	},
	{
		"date": "Sat Dec 17 2016 15:55:21",
		"nb": "Device 42",
		"name":"André Gonçalo Ferreira",
		"description": "Terceiro segredo",
		"challenge": "Submit secret",
		"discovered": false		
	}]
);
