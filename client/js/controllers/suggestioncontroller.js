myAppModule.controller('SuggestionController', ['auth', 'store', '$http', '$scope', '$rootScope', 'SuggestionFactory', '$location', function(auth, store, $http, $scope, $rootScope, SuggestionFactory, $location){
    console.log('got to suggestion controller!');
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
    $scope.user = auth.profile;
    $scope.addSuggestion = function(){
        if($scope.newSuggestion == undefined){
            
        }
        else{
            alert("Thank you!");
            return $location.path('/newsfeed');
        }
    }
}])
