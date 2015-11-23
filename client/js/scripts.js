//Set up a new angular module, name it, and inject router
var myAppModule = angular.module('readitApp', ['ngRoute', 'ngParallax']);
moment().format();

//Set title dynamically for each partial page and set rootscope variables
myAppModule.run(function($rootScope){
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute){
        $rootScope.title = currentRoute.title;
        $rootScope.loggedIn = false;
        $rootScope.userName = "";
    });
});

//Set up Routes with dynamic titles
myAppModule.config(function($routeProvider){
    $routeProvider
    .when('/',{
        title: "Welcome to ReadIt!",
        templateUrl: './partials/welcome.html'
    })
    .when('/login',{
        title: "ReadIt | Login",
        templateUrl: '/partials/login.html'
    })
    .when('/newsfeed',{
        title: "ReadIt | Newsfeed",
        templateUrl: '/partials/newsfeed.html'
    })
    .when('/mydashboard',{
        title: "ReadIt | My Dashboard",
        templateUrl: '/partials/mydashboard.html'
    })
    .when('/suggestions',{
        title: "ReadIt | Make a Suggestion",
        templateUrl: '/partials/suggestions.html'
    })
    .when('/bookprofile',{
        title: "ReadIt | Book Profile",
        templateUrl: '/partials/bookprofile.html'
    })
    .when('/events',{
        title: "ReadIt | Community Events",
        templateUrl: '/partials/events.html'
    })
    .when('/forum',{
        title: "ReadIt | Forum",
        templateUrl: '/partials/forum.html'
    })
    .when('/forum/:id',{
        title: "ReadIt | Forum Category",
        templateUrl: '/partials/forumcategory.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
