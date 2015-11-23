myAppModule.controller('BookProfileController', ['$scope', '$rootScope', 'BookProfileFactory', '$location', function($scope, $rootScope, BookProfileFactory, $location){
    $(document).ready(function(){
        $(".button-collapse").sideNav();
    })

    // if($rootScope.loggedIn == false){
    //     console.log('user not logged in');
    //     return $location.path('/');
    // }

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


    console.log($rootScope.loggedIn);
    console.log('got to book profile controller!');


}])
