myAppModule.factory('EventFactory', function($http, $location){
    var factory = {};
    var events = [];
    factory.getEvents = function(callback){
        $http.get('/events/getAll').success(function(output){
            events = output;
            callback(events);
        })
    }
    factory.addEvent = function(event, callback){
        $http.post('/events/addEvent', event).success(function(){
            callback();
        })
    }
    return factory;
})
