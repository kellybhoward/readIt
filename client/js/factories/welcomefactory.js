myAppModule.factory('WelcomeFactory', function($http){
    var factory = {};
    var users = [];
    factory.getUsers = function(callback){
        $http.get('/users/showAll').success(function(data){
            users = data;
            callback(users);
        })
    }
    factory.storeUser = function(user, callback){
        console.log('got to factory to store user!');
        console.log(user);
        $http.post('/users/storeUser', user).success(function(){
            callback();
        });
    }
    return factory;
})
