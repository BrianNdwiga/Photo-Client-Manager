// Home Page
FlowRouter.route('/', {
    name: 'gallery',
    action() {
        BlazeLayout.render("HomeLayout", { main: "gallery" });
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", { main: "Dashboard" });
    }
});

// Albums Page
FlowRouter.route('/albums', {
    name: 'albums',
    action() {
        BlazeLayout.render("HomeLayout", { main: "albums" });
    }
});

// weddings album
FlowRouter.route('/albums/weddings', {
    name: 'weddings',
    action() {
        BlazeLayout.render("HomeLayout", { main: "weddings" });
    }
});
// birthday album
FlowRouter.route('/albums/birthdays', {
    name: 'birthdays',
    action() {
        BlazeLayout.render("HomeLayout", { main: "birthdays" });
    }
});
// party album
FlowRouter.route('/albums/party', {
    name: 'party',
    action() {
        BlazeLayout.render("HomeLayout", { main: "parties" });
    }
});
// funeral album
FlowRouter.route('/albums/funeral', {
    name: 'funeral',
    action() {
        BlazeLayout.render("HomeLayout", { main: "funerals" });
    }
});
// shoots album
FlowRouter.route('/albums/shoots', {
    name: 'shoots',
    action() {
        BlazeLayout.render("HomeLayout", { main: "shoots" });
    }
});
// family album
FlowRouter.route('/albums/family', {
    name: 'family',
    action() {
        BlazeLayout.render("HomeLayout", { main: "family" });
    }
});
// events album
FlowRouter.route('/albums/events', {
    name: 'events',
    action() {
        BlazeLayout.render("HomeLayout", { main: "events" });
    }
});
// about me
FlowRouter.route('/about', {
    name: 'about',
    action() {
        BlazeLayout.render("HomeLayout", { main: "about" });
    }
});

// for groups
adminRoutes = FlowRouter.group({
    // takes in an object
    prefix: '/admin',
    //every single route part of adminroutes will be /admin/sth
    name: 'admin'
})

adminRoutes.route('/users', {
        name: 'users',
        action() {
            BlazeLayout.render("AppLayout", { main: "Users" });
        }
    }) //gets