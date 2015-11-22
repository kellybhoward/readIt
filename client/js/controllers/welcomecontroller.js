myAppModule.controller('WelcomeController', ['$scope', '$rootScope', 'WelcomeFactory', '$location', function($scope, $rootScope, WelcomeFactory, $location){
    $(document).ready(function(){
        $(".button-collapse").sideNav();
    })

    if($rootScope.loggedIn == false){
        console.log('user not logged in');
        return $location.path('/');
    }

    //logged in checks and logout
    $scope.logout = function(){
        $rootScope.loggedIn = false;
        $rootScope.userName = "";
        return $location.path('/');
    }

    console.log($rootScope.loggedIn);
    console.log('got to welcome controller!');


}])
