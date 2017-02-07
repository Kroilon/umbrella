import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.Info.helpers({
  
  

});


Template.Info.events({
  'submit form' (event) {

    event.preventDefault();

    Meteor.call("checkTwitter", function(error, results) {
        console.log(results.statusCode); //results.data should be a JSON object
    });

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
    
    $("#info")[0].reset();     
    

  }  
  
});
