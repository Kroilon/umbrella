import { Mongo } from 'meteor/mongo';

export const Umbrella = new Mongo.Collection('umbrella');

export const Devices = new Mongo.Collection('devices');

export const Locations = new Mongo.Collection('locations');