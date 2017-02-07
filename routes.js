// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {
            main: "Home"
        });
    }
});

// Dashboard
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Dashboard"
        });
    }
});

// Pick
FlowRouter.route('/pick', {
    name: 'pick',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Pick"
        });
    }
});

// Drop
FlowRouter.route('/drop', {
    name: 'drop',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Drop"
        });
    }
});


// Info
FlowRouter.route('/info', {
    name: 'info',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Info"
        });
    }
});

// Splash
FlowRouter.route('/splash', {
    name: 'splash',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Splash"
        });
    }
});

/*______________________________________________________________*/

// Character Table
FlowRouter.route('/characters/:page', {
    name: 'characters',
    action: function (params, queryParams) {
        BlazeLayout.render("CharactersLayout", {
            main: "Characters"
        });
    }
});

FlowRouter.route('/characters/:nb', {
    name: 'characters',
    action: function (params, queryParams) {
        BlazeLayout.render("CharactersLayout", {
            main: "Characters"
        });
    }
});

// Characters
FlowRouter.route('/characters', {
    name: 'characters',
    action() {
        BlazeLayout.render("CharactersLayout", {
            main: "Characters"
        });
    }
});


// Performance
FlowRouter.route('/performance', {
    name: '/performance',
    action() {
        BlazeLayout.render("PerformanceLayout", {
            main: "LeaderboardMainTabs"
        });
    }
});

// Management
FlowRouter.route('/management', {
    name: 'management',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Management"
        });
    }
});

// Kahoot
FlowRouter.route('/kahoot', {
    name: 'kahoot',
    action() {
        BlazeLayout.render("KahootLayout", {
            main: "Kahoot"
        });
    }
});

// Story
FlowRouter.route('/story', {
    name: '/story',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Story"
        });
    }
});

// Rules
FlowRouter.route('/rules', {
    name: '/rules',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Rules"
        });
    }
});

// Secrets
FlowRouter.route('/secrets', {
    name: '/secrets',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Secrets"
        });
    }
});