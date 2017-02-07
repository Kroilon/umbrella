import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Devices } from '/imports/api/databasedriver.js';
import { Locations } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.DropScan.helpers({

	dropLocations() {

	    let locations = Locations.find({}).fetch();
    	return locations;
    }

});

Template.DropScan.events({   

  "click #selectDevice" (event){
      event.preventDefault();
      //alert("DROP" + this.location );
      FlowRouter.go('/scanpayment');
  }

});


function getUserByNB(nb) {
  let latestCollection = Umbrella.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestCollection.users, function (e) { return e.nb == nb; });
  return users[0];
}