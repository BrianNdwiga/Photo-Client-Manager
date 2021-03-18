// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", { main: "Home" });
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