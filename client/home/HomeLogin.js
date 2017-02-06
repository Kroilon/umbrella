import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';


const WRONG_USERNAME_PASSWORD_MESSAGE = 'Username or password invalid!';

Template.HomeLogin.events({
	'submit form'(event) {

		event.preventDefault();

		var userID = $("#userId").val();
		var userPass = $("#userPass").val();

		var latestCollection = Umbrella.findOne({}, { sort: { date: -1, limit: 1 } });

		var user = $.grep(latestCollection.users, function (e) {
			return e.nb == userID;
		});

		var supposedlyLoggedUser = user[0];
		if (supposedlyLoggedUser
			&& supposedlyLoggedUser.nb == userID
			&& userPass == supposedlyLoggedUser.password) {
			//console.log("LOGGED IN!");

			Session.set("loggedUser", user);

			FlowRouter.go('/map');
		} else {
			$('#loginPageMessage').show();
			$('#loginPageMessage').text(WRONG_USERNAME_PASSWORD_MESSAGE);
			$('#loginPageMessage').fadeOut(10000);
		}
	}
});