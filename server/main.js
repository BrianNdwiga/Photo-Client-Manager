import { Meteor } from 'meteor/meteor';

Meteor.publish('clients', function() {
    return Clients.find();
});