myAppModule.factory('NewsfeedFactory', function($http){
    var factory = {};
    var users = [];
    factory.getUsers = function(callback){
        $http.get('/users/showAll').success(function(output){
            users = output;
            callback(users);
        })
    }
    var quotes = [];
    factory.getQuotes = function(callback){
        $http.get('quotes/getAll').success(function(output){
            quotes = output;
            callback(quotes);
        })
    }
    var events = [];
    factory.getEvents = function(callback){
        $http.get('events/getAll').success(function(output){
            events = output;
            callback(events);
        })
    }
    return factory;
})
