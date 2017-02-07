import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Devices } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.Drop.helpers({

	allDevicesDrop() {

	    let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);
        return user.devicesDrop;

    }
});


function getUserByNB(nb) {
  let latestCollection = Umbrella.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestCollection.users, function (e) { return e.nb == nb; });
  return users[0];
}