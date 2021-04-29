Template.MainNav.events({
    'click .login-toggle': () => {
        Session.set('nav-toggle', 'open')
    },
    'click .logout': () => {
        AccountsTemplates.logout(); //here the hook is aware
    }
})

// login toggle at about page
Template.about.events({
    'click .login-toggle': () => {
        Session.set('nav-toggle', 'open')
    }
})