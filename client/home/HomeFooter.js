import { Template } from 'meteor/templating';

Template.HomeFooter.helpers({
  umbrellaYear() {
    let currentDate = new Date();
	let currentYear = currentDate.getFullYear(); 
    return currentYear;
  }
});
