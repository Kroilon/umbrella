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

		/*
		let balance;
		Meteor.call("getSocialsBalance","35118815503333", function(error, result) {
			if (error) {
				alert(error);
			} else {
				Session.set("socialBalance", result);
				balance = result;
			}
		});
		alert("BALANCE: " + balance);

		console.log("RESULT API CALL: " + balance);
		*/


		var supposedlyLoggedUser = user[0];
		if (supposedlyLoggedUser
			&& supposedlyLoggedUser.nb == userID
			&& userPass == supposedlyLoggedUser.password) {
			//console.log("LOGGED IN!");

			Session.set("loggedUser", user);

			FlowRouter.go('/splash');
		} else {
			$('#loginPageMessage').show();
			$('#loginPageMessage').text(WRONG_USERNAME_PASSWORD_MESSAGE);
			$('#loginPageMessage').fadeOut(10000);
		}
	}
});