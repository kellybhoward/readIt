myAppModule.factory('DashboardFactory', function($http){
    var factory = {};
    var badges = [];
    factory.getBadges = function(callback){
        $http.get('/badges/getAll').success(function(output){
            badges = output;
            callback(badges);
        })
    }
    var books = [];
    factory.getBooks = function(callback){
        $http.get('/books/getAll').success(function(output){
            books = output;
            callback(books);
        })
    }
    return factory;
})
