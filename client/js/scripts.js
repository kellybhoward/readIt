//Set up a new angular module, name it, and inject router and authenication stuff
var myAppModule = angular.module('readitApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngRoute', 'ngParallax'])
.config(function (authProvider) {
  authProvider.init({
    domain: 'readit.auth0.com',
    clientID: 'SNHEs6HHm31Cbm6cUC3x8QGJqaf3FjPr'
  });
})
.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});

moment().format();

//Set title dynamically for each partial page and set rootscope variables
myAppModule.run(function($rootScope, auth, store, jwtHelper, $location){
    $rootScope.$on('$locationChangeStart', function() {
        var token = store.get('token');
        if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
                if (!auth.isAuthenticated) {
                    auth.authenticate(store.get('profile'), token);
                }
            } else {
                // Either show the login page or use the refresh token to get a new idToken
                $location.path('/');
            }
        }
    });
    $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute){
        $rootScope.title = currentRoute.title;
        $rootScope.userName = "";
    });
});

//Set up Routes with dynamic titles
myAppModule.config(function(authProvider, $routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        title: "Welcome to ReadIt!",
        templateUrl: './partials/welcome.html'
    })
    .when('/login',{
        title: "ReadIt | Login",
        templateUrl: '/partials/login.html',
        requiresLogin: true
    })
    .when('/newsfeed',{
        title: "ReadIt | Newsfeed",
        templateUrl: '/partials/newsfeed.html',
        requiresLogin: true
    })
    .when('/mydashboard',{
        title: "ReadIt | My Dashboard",
        templateUrl: '/partials/mydashboard.html',
        requiresLogin: true
    })
    .when('/suggestions',{
        title: "ReadIt | Make a Suggestion",
        templateUrl: '/partials/suggestions.html',
        requiresLogin: true
    })
    .when('/bookprofile',{
        title: "ReadIt | Book Profile",
        templateUrl: '/partials/bookprofile.html',
        requiresLogin: true
    })
    .when('/events',{
        title: "ReadIt | Community Events",
        templateUrl: '/partials/events.html',
        requiresLogin: true
    })
    .when('/forum',{
        title: "ReadIt | Forum",
        templateUrl: '/partials/forum.html',
        requiresLogin: true
    })
    .when('/forum/:id',{
        title: "ReadIt | Forum Category",
        templateUrl: '/partials/forumcategory.html',
        requiresLogin: true
    })
    .otherwise({
        redirectTo: '/'
    });
    authProvider.init({
        domain: 'readit.auth0.com',
        clientID: 'SNHEs6HHm31Cbm6cUC3x8QGJqaf3FjPr',
        callbackURL: location.href,
        // Here include the URL to redirect to if the user tries to access a resource when not authenticated.
        loginUrl: '/'
    });
});
myAppModule.config(function(authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider){
    jwtInterceptorProvider.tokenGetter = ['store', function(store) {
        // Return the saved token
        return store.get('token');
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
});
