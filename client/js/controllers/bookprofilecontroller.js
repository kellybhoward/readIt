myAppModule.controller('BookProfileController', ['auth', 'store', '$http', '$scope', '$rootScope', 'BookProfileFactory', '$location', function(auth, store, $http, $scope, $rootScope, BookProfileFactory, $location){
    console.log('got to book profile controller!');
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

}])
