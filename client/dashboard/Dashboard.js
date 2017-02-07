import { Template } from 'meteor/templating';
import { Umbrella } from '/imports/api/databasedriver.js';
import { Devices } from '/imports/api/databasedriver.js';

Template.Dashboard.helpers({
    playerSkillsChart() {
        return {
            colors: ['#de4f4f', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                polar: true,
                type: 'line',

                //Edit chart margin
                margin: [0, 0, 0, 0],
                //Edit chart spacing
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0
            },

            title: {
                text: null,
                x: -80
            },

            pane: {
                size: '60%'
            },

            xAxis: {
                categories: ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                align: 'center',
                verticalAlign: 'top',
                y: 40,
                layout: 'vertical'
            },

            credits: {
                enabled: false
            },

            series: [{
                showInLegend: false,
                name: 'Skills',
                data: [
                    device1(),
                    device2(),
                    device3(),
                    device4(),
                    device5()
                ],
                pointPlacement: 'on',
                padding: 0
            }]
        };
    },
    

    name() {
        var userName = Session.get("loggedUser")[0].name;
		return userName;
    },

    devicesPick() {

	    let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);
        return user.devicesPick;

    },
    devicesDrop() {

	    let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);
        return user.devicesDrop;

    },
    socials() {

	    let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);
        return user.counter;

    }
    /*
    myBadges() {
        let nb = Session.get(CURRENT_PLAYER_NB);
        let user = getUserByNB(nb);
        var badges = new Array();

        user.score.forEach(function (score) {
            if (score.countType === "BADGE") {
                var badgeName = score.name;
                var badge = Badges.find({ "name": badgeName }).fetch();

                if (badge !== undefined && badge.name !== "") {
                    if (badges.length > 0) {
                        var check = false;
                        badges.forEach(function (n) {
                            if (n.name === badge[0].name) {
                                var count = parseInt(n.count);
                                count++;
                                n.count = count;
                                check = true;
                            }
                        });

                        if (!check) {
                            var newBadge = { 'name': badge[0].name, 'image': badge[0].image, 'count': 1 };
                            badges.push(newBadge);
                        }

                    } else {
                        var newBadge = { 'name': badge[0].name, 'image': badge[0].image, 'count': 1 };
                        badges.push(newBadge);
                    }
                }
            }
        });
        return badges;
    }
    */
});


function getUserByNB(nb) {
  let latestCollection = Umbrella.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestCollection.users, function (e) { return e.nb == nb; });
  return users[0];
}

 /*
Template.Map.events({  

  'click .roomPolygon' (event){   
  	event.preventDefault();
  	//console.log("Room: " + event.currentTarget.id); 

  	var rooms = new Array();
    var roomName = event.currentTarget.id;
    var room = Rooms.find({ "name": roomName }).fetch();

    //console.log("RoomName: " + room[0].name);
    //console.log("RoomImage: " + room[0].image);
    //console.log("RoomDescription: " + room[0].description);

    var newRoom = { 'name': room[0].name, 'image': room[0].image, 'description': room[0].description };
    rooms.push(newRoom);

    Modal.show('showRoomInfoModal', rooms);	
  },
   
  'click .badgePolygon' (event){   
  	event.preventDefault();
  	//console.log("Badge: " + event.currentTarget.id);

  	var badges = new Array();
    var badgeName = event.currentTarget.id;
    var badge = Badges.find({ "name": badgeName }).fetch();

    //console.log("BadgeName: " + badge[0].name);
    //console.log("BadgeImage: " + badge[0].image);
    //console.log("BadgeDescription: " + badge[0].description);

    var newBadge = { 'name': badge[0].name, 'image': badge[0].image, 'description': badge[0].description };
    badges.push(newBadge);

    Modal.show('showBadgeInfoModal', badges);	
  }
  
  
});
*/