import "../../../lib/collections";
import { Meteor } from "meteor/meteor";

Meteor.subscribe("clients");
Template.contactForm.events({
    "submit #clientContact": function(event, template) {
        var FullName, Email, Message;
        FullName = event.target.FullName.value,
            Email = event.target.Email.value,
            Message = event.target.Message.value,
            console.log("name:" + FullName);
        Clients.insert({
            FullName: FullName,
            Email: Email,
            Message: Message,
            createdOn: new Date()
        });
        event.target.FullName.value = "";
        event.target.Email.value = "";
        event.target.Message.value = "";
        event.preventDefault();
        console.log("client details sent");
        return false;
    }
})