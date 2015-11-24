myAppModule.controller('WelcomeController', ['auth', 'store', '$http', '$scope', '$rootScope', 'WelcomeFactory', '$location', function(auth, store, $http, $scope, $rootScope, WelcomeFactory, $location){
    console.log('got to welcome controller!');
    $(document).ready(function(){
        $(".button-collapse").sideNav();
    })
    $scope.users = [];
    WelcomeFactory.getUsers(function(data){
        $scope.users = data;
    });
    $scope.login = function () {
        auth.signin({}, function (profile, token) {
            // Success callback
            store.set('profile', profile);
            store.set('token', token);
            for(var i = 0; i<$scope.users.length; i++){
                if($scope.users[i].user_id == profile.user_id){
                    console.log('user exists in the DB!');
                     return $location.path('/newsfeed');
                }
            }
            console.log("didn't find in db");
            var user = profile;
            console.log(user);
            WelcomeFactory.storeUser(user, function(){

                console.log('stored user!');
                console.log(user);
                $location.path('/newsfeed');
            })
        }, function () {
            // Error callback
            $location.path('/');
        });
    }
}]);
