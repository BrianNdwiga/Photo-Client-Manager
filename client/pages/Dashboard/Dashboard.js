// clients
Template.Dashboard.helpers({
    clients: function() {
        return Clients.find({}, { sort: { createdAt: -1 } });
    }
});
Template.Dashboard.events({
    'click .js-del': function() {
        Clients.remove(this._id);
    }
});