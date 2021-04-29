import { Mongo } from 'meteor/mongo'
Clients = new Mongo.Collection("clients")
Clients.allow({
    insert: function() {
        return true;
    },
    update: function() {
        return true;
    },
    remove: function() {
        return true;
    },
});