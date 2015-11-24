myAppModule.controller('NewsfeedController', ['auth', 'store', '$http', '$scope', '$rootScope', 'NewsfeedFactory', '$location', function(auth, store, $http, $scope, $rootScope, NewsfeedFactory, $location){
    console.log('got to newsfeed controller!');
    $scope.randomQuote = "";
    $scope.randomAuthor = "";
    $(document).ready(function(){
        $(".button-collapse").sideNav();
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

    //Generate Recent Users
    $scope.users = [];
    $scope.recentUsers = [];
    var recentUsers;
    $scope.$watch("recentUsers", function(newValue, oldValue) {
        return recentUsers
    })
    NewsfeedFactory.getUsers(function(data){
        $scope.users = data;
        var recentUsers = [];
        for(var i=$scope.users.length-1; i>=0; i--){
            recentUsers.push($scope.users[i]);
        }
        return createUsers(recentUsers);
    })
    function createUsers(recentUsers){
        for(var i=0; i<recentUsers.length; i++){
            var temp = recentUsers[i]['date_created'];
            recentUsers[i]['recentDate'] = moment(temp).fromNow();
        }
        $scope.recentUsers = recentUsers;
        console.log($scope.recentUsers);
    }
    //End Generate Recent Users

    //Generate Quote Card
    var quotes = [];
    var randomNumber = 1;
    $scope.$watch("randomNumber", function(newValue, oldValue) {
        return randomNumber
    })
    NewsfeedFactory.getQuotes(function(data){
        quotes = data;
        console.log(quotes);
        randomNumber = Math.floor(Math.random()*7)+1;
        console.log(randomNumber);
        for(var i = 0; i<quotes.length; i++){
            if(quotes[i].number == randomNumber){
                $scope.randomQuote = quotes[i].quote;
                $scope.randomAuthor = quotes[i].author;
            }
        }
    })
    //End Quote Card

    //Generate Upcoming Events
    $scope.events = [];
    NewsfeedFactory.getEvents(function(data){
        $scope.events = data;
        console.log($scope.events);
    })
    //End Upcoming Events

    $rootScope.auth = auth;

}])
