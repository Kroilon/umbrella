import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';


Template.Home.helpers({

	isLoggedIn() {
		var abc = Session.get("loggedUser");

		var cond = abc != '' && Session.get("loggedUser")[0].nb != undefined;
		return cond;
	}

});