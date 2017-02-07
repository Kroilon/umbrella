import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Devices } from '/imports/api/databasedriver.js';
import { Locations } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

import { DROP_SCAN_LOCATION } from '/client/drop/scan/DropScan.js';

Template.ScanPayment.created = function(){
     
    let balance = "NaN";

    Meteor.call("checkSLA", function(error, result) {
        if (error) {
            alert(error);
        } else {
            //Session.set("socialBalance", result);
            //alert(JSON.stringify(result));
            //document.getElementById("socialsID").value = JSON.stringify(result);
            //alert(JSON.stringify(result));
            document.getElementById("mySLA").innerHTML = "SLA: Checked";
           
        }
    });
    
    //console.log("OBJECT 2: " + balance);

    
}

Template.ScanPayment.helpers({

	dropLocation() {

	    let location = Session.get(DROP_SCAN_LOCATION).trim();;
    	return location;
  }

});

Template.ScanPayment.events({   


  'submit form' (event) {

    event.preventDefault();

    let description = $("#infoDescription").val();
    //console.log("DECRIPTION:" + description);

    Modal.show('showModal', this); 

    /*
    Meteor.call("insertBadge", badgeData, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    */
    
    $("#scanPayment")[0].reset();     
    
    FlowRouter.go('/splash');

  }  

});


function getUserByNB(nb) {
  let latestCollection = Umbrella.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestCollection.users, function (e) { return e.nb == nb; });
  return users[0];
}