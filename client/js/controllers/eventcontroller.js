myAppModule.controller('EventController', ['auth', 'store', '$http', '$scope', '$rootScope', 'EventFactory', '$location', function(auth, store, $http, $scope, $rootScope, EventFactory, $location){
    console.log('got to event controller!');
    $(document).ready(function(){
        $(".button-collapse").sideNav();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });
    })
    $scope.logout = function() {
        auth.signout();
        store.remove('profile');
        store.remove('token');
        $location.path('/');
    }
    //nav bar functions
    $scope.goToMyDashboard = function(){
        return $location.path('/mydashboard');
    }
    $scope.goToNewsfeed = function(){
        return $location.path('/newsfeed');
    }
    $scope.goToForum = function(){
        return $location.path('/forum');
    }
    $scope.goToEvents = function(){
        return $location.path('/events');
    }
    $scope.goToSuggestions = function(){
        return $location.path('/suggestions');
    }
    $scope.logout = function(){
        $rootScope.loggedIn = false;
        $rootScope.userName = "";
        return $location.path('/');
    }

    //Generate Upcoming Events
    $scope.events = [];

    EventFactory.getEvents(function(data){
        $scope.events = data;
        console.log($scope.events);
    });
    //End Upcoming Events

    //Add Event
    var newEvent = {};
    $scope.addEvent = function(){
        var newEvent = $scope.newEvent;
        console.log($scope.newEvent);
        EventFactory.addEvent(newEvent, function(){
            console.log('added event!');
            EventFactory.getEvents(function(data){
                $scope.events = data;
                console.log($scope.events);
                $scope.newEvent = {};
            })
        });
    };
    //End Add Event

}])
