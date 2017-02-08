  import '../imports/api/databasedriver.js';
  import { Locations } from '/imports/api/databasedriver.js';
  import { Devices } from '/imports/api/databasedriver.js';
  import { Umbrella } from '/imports/api/databasedriver.js';
  import { HTTP } from 'meteor/http';


  Meteor.methods({

      getSocialsBalance: function (idNumber) {
        console.log('Method.getSocialsBalance for', idNumber);
        var apiUrl = 'http://222.92.146.245:5066/rating/balancemgmt/v1/balance?identityNumber=' + idNumber;
        console.log('apiUrl: ' +  apiUrl );
        var response = HTTP.call('GET', apiUrl, {} );
        console.log('Response: ' +  response.content );
        let parseObj = JSON.parse(response.content);
        console.log('JSON: ' +  parseObj );
        let parseCode = parseObj.balanceDetail[0].currencyID;
        console.log('CODE: ' +  parseCode );
        let myString = "" + parseCode;
        console.log('STRING: ' +  myString ); 
        return parseCode;
      },

      checkSLA: function () {
        console.log('Method.checkSLA');
        var apiUrl = 'http://env-0693795.jelastic.servint.net/DSLAManagement/api/slaManagement/v2/sla';
        console.log('apiUrl: ' +  apiUrl );
        var options = { 'postman-token': '4a6245d3-94c4-18b7-9ebd-64c42455505f',
            'cache-control': 'no-cache',
            'accept': 'application/json',
            'content-type': 'application/json' };
        var response = HTTP.call('GET', apiUrl, options );
        console.log('Response: ' +  response.content );
        let parseObj = JSON.parse(response.content);
        console.log('JSON: ' +  parseObj );
        let parseCode = parseObj.id;
        console.log('CODE: ' +  parseCode );
        return parseCode;
      },

      postSLA: function () {
      console.log('Method.postSLA');
      var apiUrl = 'http://env-0693795.jelastic.servint.net/DSLAManagement/api/slaManagement/v2/sla';

      var response = HTTP.call('POST', apiUrl, {
       headers:  {
         "content-type": "application/json",
         "accept": "application/json",
         "cache-control": "no-cache",
         "postman-token": "93fd5ecb-5c9a-0a11-1e1b-cce3948391b0"},
         
         data: { name: 'HighSpeedDataSLA',
  description: 'SLA for high speed data.',
  version: '0.1',
  validFor:
  { startDateTime: '2013-04-19T16:42:23.0Z',
    endDateTime: '2013-04-21T09:43:54.0Z' },
  relatedParty:
  [ { href: 'http://', role: 'SLAProvider' },
    { href: 'http://', role: 'SLAConsumer' },
    { href: 'http://', role: 'SLAAuditor' },
    { href: 'http://', role: 'SLABusinessBroker' },
    { href: 'http://', role: 'SLATechnicalBroker' },
    { href: 'http://', role: 'ThirdPartySLAManager' },
    { href: 'http://', role: 'EndUser' } ],
  rule:
  [ { id: 'availability',
      metric: 'http://IEEE99.5/Availability',
      unit: 'string',
      referenceValue: 'available',
      operator: '.eq',
      tolerance: '0.05',
      consequence: 'http://ww.acme.com/contract/clause/42' },
    { id: 'downstream_GBR',
      metric: 'http://IEEE99.5/Data/bitrates/GBR/down',
      unit: 'kbps',
      referenceValue: '1024',
      operator: '.ge',
      tolerance: '0.20',
      consequence: 'http://ww.acme.com/contract/clause/45' }]}
       
       });
      console.log('INVOKED');
      console.log('Response: ' +  response.content);
      return response;
  },


    
  	  updateScore: function (id, playerId, score) {
        var currentUserId = Meteor.userId();
        Academy.update(
            { _id: id, 'users.nb': playerId },
            {$push: {'users.$.score': score}},
            {updatedBy: currentUserId}
        );

      },    

      deleteScore: function (id, playerId, scoreDate, ) {

        Academy.update(
            { _id: id, 'users.nb': playerId},
            {$pull: {'users.$.score': {date: scoreDate}}}
        );
      },

      updateTeamScore: function (id, score) {
        var currentUserId = Meteor.userId();
        Academy.update(
            { _id: id },
            {$push: {'teamScore': score}},
            {updatedBy: currentUserId}
        );

      },

      deleteTeamScore: function (id, scoreDate) {
        var currentUserId = Meteor.userId();
        Academy.update(
            { _id: id },
            {$pull: {'teamScore': {date: scoreDate}}},
            {updatedBy: currentUserId}
        );

      },

      updateVoted: function(id, playerId) {
        var currentUserId = Meteor.userId();
        Academy.update(
            { _id: id, 'users.nb': playerId },
            {$push: {'users.$.voted': true}},
            {updatedBy: currentUserId}
        );

      },

      insertChallenge: function(data) {

        console.log(data);

        Challenges.insert(data);

      },

      insertRoom: function(data) {

        console.log(data);

        Rooms.insert(data);

      },

      insertBadge: function(data) {

        console.log(data);

        Badges.insert(data);

      },

      insertRule: function(data) {

        console.log(data);

        Rules.insert(data);

      },

      addAcademy : function(data) {

        console.log(data);

        Academy.insert(data);
        
      },

      removeAcademy : function(id) {

        Academy.remove(
            { _id: id }
        );
              
      },

  	  deleteCharacter: function (id,playerId) {

        Academy.update(
            { _id: id },
            {$pull: {'users': {nb:playerId}}}
        );
  	  },

  	  deleteBadge: function (badgename) {

        Badges.remove(
            { name: badgename }
        );
  	  },

  	  deleteRoom: function (roomname) {

        Rooms.remove(
            { name: roomname }
        );
  	  },

      deleteRule: function (ruleName) {

        Rules.remove(
            { name: ruleName }
        );
      },

  	  deleteChallenge: function (challengename) {

        Challenges.remove(
            { name: challengename }
        );
  	  },

  		updateDailyMessage : function(latestAcademy, message)	{
  			Academy.update({_id: latestAcademy._id}, {$set :{'dailyMessage' : message }});
  		},
  		
      terminateDay : function(latestAcademy) {
  			var energyLevel = parseInt(latestAcademy.energyLevel) - 1;

  			Academy.update({_id: latestAcademy._id}, {$set :{'energyLevel' : energyLevel }});
  		},

  		addCheese : function(latestAcademy, burgerCount) {
  			//var newValue = parseInt(latestAcademy.energyLevel) + parseInt(burgerCount);
  			Academy.update({_id: latestAcademy._id}, {$set :{'energyLevel' : burgerCount }});
  		},

  		updateHomeMessage : function(latestAcademy, messageHome) {
  			Academy.update({_id: latestAcademy._id}, {$set :{'homeMessage' : messageHome }});
  		},

  		insertSecret : function(data) {
  			Secrets.insert(data);
  		},

      discoverSecret : function(id) {
        Secrets.update({_id: id}, {$set :{'discovered' : true }});
      },

      deleteSecret : function(id) {
        Secrets.remove(
            { _id: id }
        );
      },

      activateAcademy : function(id) {
        Academy.update({_id: id}, {$set :{'date' : new Date() }});
      },

      updateBadgeStatus : function( roomName, badgeName, newStatus) {      
        Rooms.update({_id: roomName._id, 'badges.name': badgeName}, { $set:{'badges.$.locked': newStatus }} );
      },

      insertAcademyPlayer: function( academy, user) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id }, { $push: { 'users': user } });
      },

      removePlayer: function( academy, user) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id}, { $pull: { 'users': user } });
      },

      updateAcademyPlayer: function( academy, nb, player) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb }, { $set: {'users.$': player }} );
      },

      changeRoom: function( academy, room) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id }, { $set: {'currentRoom': room }} );
      },

      incrementEnergyLevel: function( academy, energyLevel) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id }, { $inc: {'energyLevel': energyLevel }} );
      },

      incrementCounDays: function( academy, level) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id }, { $inc: {'countDays': level }} );
      },

      setVotedStatus: function( academy, nb, status) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.voted': status}} );
      },

      updateUserThatVoted : function( academy, user, votedFor) {      
        Academy.update( { _id: academy._id, 'users.nb': user.nb}, { $set: {'users.$.voted': votedFor } });
      },   

      updateVotedCounter : function( academy, votedFor) {      
        Academy.update( { _id: academy._id, 'users.nb': votedFor}, { $inc:{"users.$.counter": 1 } });
      },

      updateAcademyBadge: function( badge, data) {
        Badges.update({_id: badge._id}, { $set: {'name': data.name, 'points': data.points, 'pointsType': data.pointsType, 'type': data.type, 'description': data.description }} );
      },

      updateAcademyRoom: function( room, data) {
        Rooms.update({_id: room._id}, { $set: {'name': data.name, 'dailyDecision': data.dailyDecision, 'description': data.description, 'image': data.image }} );
      },

      updateAcademyChallenge: function( challenge, data) {
        Challenges.update({_id: challenge._id}, { $set: {'name': data.name, 'points': data.points, 'pointsType': data.pointsType, 'description': data.description }} );
      },

      updateAcademyRules: function( rules, data) {
        Rules.update({_id: rules._id}, { $set: {'name': data.name, 'type': data.type, 'typeName': data.typeName, 'threshold': data.threshold, 'points': data.points, 'pointsType': data.pointsType, 'description': data.description }} );
      },

      updatePlayerName: function( academy, nb, name) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.name': name}} );
      },

      updatePlayerNB: function( academy, nb, newNB) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.nb': newNB}} );
      },

      updatePlayerEmail: function( academy, nb, email) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.email': email}} );
      },

      updatePlayerPassword: function( academy, nb, pass) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.password': pass}} );
      },

      updatePlayerMBTI: function( academy, nb, mbti) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.mbti': mbti}} );
      },

      updatePlayerMobile: function( academy, nb, mobile) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.contact': mobile}} );
      },

      updatePlayerDoB: function( academy, nb, dateOfBirth) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.dateOfBirth': dateOfBirth}} );
      },

      updatePlayerUnit: function( academy, nb, unit) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.businessUnit': unit}} );
      },

      updatePlayerSkillsPeople: function( academy, nb, people) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.skills.0.people': people}} ); 
      },

      updatePlayerSkillsCommunication: function( academy, nb, communication) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.skills.0.communication': communication}} ); 
      },

      updatePlayerSkillsProblemSolving: function( academy, nb, problemSolving) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.skills.0.problemSolving': problemSolving}} ); 
      },

      updatePlayerSkillsManagement: function( academy, nb, management) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.skills.0.management': management}} ); 
      },

      updatePlayerSkillsAndroid: function( academy, nb, android) {
        //console.log("academyID: " + academy._id);
        Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.skills.0.android': android}} ); 
      },

      deleteAllSecrets : function() {
        Secrets.remove(
            {}
        );
      },

      updateObjectiveDescription: function( objective, data) {
        KroilonHistory.update({_id: objective._id}, { $set: {'description': data }} );
      }

  });
