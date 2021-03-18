myLogoutfunc = function() {
    // console.log('hello')
    FlowRouter.go('/');
    Session.set('nav-toggle', '');
}

AccountsTemplates.configure({
        confirmPassword: false, //removes confirm password
        privacyUrl: 'privacy',
        onLogoutHook: myLogoutfunc,
    }) //takes in an object

AccountsTemplates.addFields([{
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    required: true
}, {
    _id: 'Profession',
    type: 'select',
    displayName: 'Profession',
    select: [{
        text: 'Developer',
        value: 'developer'
    }, {
        text: 'Designer',
        value: 'designer'
    }, {
        text: 'Other',
        value: 'other'
    }]
}]); //accepts an array