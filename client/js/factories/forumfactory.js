myAppModule.factory('ForumFactory', function($http){
    var factory = {};
    var categories = [];
    factory.showCategories = function(callback){
        $http.get('/categories/showAll').success(function(output){
            categories = output;
            callback(categories);
        })
    }
    return factory;
})
