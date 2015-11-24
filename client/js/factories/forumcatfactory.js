myAppModule.factory('ForumCatFactory', function($http){
    var factory = {};
    var category = {};
    factory.getCategory = function(categoryName, callback){
        $http.post('/categories/getCategory', categoryName).success(function(data){
            category = data;
            callback(category);
        })
    }
    var user = {};
    factory.getUser = function(userId, callback){
        $http.post('/users/getUserById', userId).success(function(data){
            user = data;
            callback(user);
        })
    }
    var post = {};
    factory.getPost = function(postId, callback){
        $http.post('/posts/getPostById', postId).success(function(data){
            post = data;
            callback(post);
        })
    }
    factory.addPost = function(post, callback){
        $http.post('/posts/addPost', post).success(function(){
            callback();
        })
    }
    factory.addComment = function(comment, callback){
        $http.post('/comments/addComment', comment).success(function(){
            callback();
        })
    }
    return factory;
})
