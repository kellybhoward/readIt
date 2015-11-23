myAppModule.controller('WelcomeController', ['$scope', '$rootScope', 'WelcomeFactory', '$location', function($scope, $rootScope, WelcomeFactory, $location){
    $(document).ready(function(){
        $(".button-collapse").sideNav();
    })
    //logged in checks and logout
    $scope.login = function(){
        $rootScope.loggedIn = true;
        $rootScope.userName = "";
        return $location.path('/newsfeed');
    }
    // if($rootScope.loggedIn == false){
    //     console.log('user not logged in');
    //     return $location.path('/');
    // }
    console.log($rootScope.loggedIn);
    console.log('got to welcome controller!');


}])
