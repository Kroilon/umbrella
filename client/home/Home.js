import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.Home.helpers({

	isLoggedIn() {
		var abc = Session.get("loggedUser");

		var cond = abc != '' && Session.get("loggedUser")[0].nb != undefined;
		return cond;
	},

	Meteor.call("getSocialsBalance","35118815503333", function(error, result) {
		if (error) {
			alert(error);
		} else {
			Session.set("socialBalance", result);
			return result;
		}
	});
});